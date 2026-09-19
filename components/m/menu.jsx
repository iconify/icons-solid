import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vj8qeqbpz.css';
import '../../css/i/itzm3abxz.css';
import '../../css/y/ycxg46bhx.css';
import '../../css/l/lcqxtqbuo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-primary-layer vj8qeqbpz"/><path class="duoicon-secondary-layer itzm3abxz"/><path class="duoicon-primary-layer ycxg46bhx"/><path class="duoicon-secondary-layer lcqxtqbuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:menu"} {...others} />);
}

export default Component;
