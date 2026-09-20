import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ztw2c0b2i.css';
import '../../css/u/u_7ar5bnj.css';
import '../../css/b/bsnu2pbme.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ztw2c0b2i"/><path clip-rule="evenodd" class="u_7ar5bnj"/><path class="bsnu2pbme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:lan-cable-solid"} {...others} />);
}

export default Component;
