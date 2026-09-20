import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spa_k7f-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="spa_k7f-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:podcast"} {...others} />);
}

export default Component;
