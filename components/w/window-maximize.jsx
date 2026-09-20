import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5v3zqbul.css';
import '../../css/q/qv0ny4dca.css';
import '../../css/p/pjqkbnbqd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u5v3zqbul"/><path class="qv0ny4dca"/><path class="pjqkbnbqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:window-maximize"} {...others} />);
}

export default Component;
