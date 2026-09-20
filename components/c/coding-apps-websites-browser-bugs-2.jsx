import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzkf-d95a.css';
import '../../css/u/u0hgv3blk.css';
import '../../css/q/qsspeg0rg.css';
import '../../css/m/m_pngtbjb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tzkf-d95a"/><path class="u0hgv3blk"/><path class="qsspeg0rg"/><path class="m_pngtbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites-browser-bugs-2"} {...others} />);
}

export default Component;
