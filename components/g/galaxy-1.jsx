import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u88n9vd2w.css';
import '../../css/r/rg2c_ob_l.css';
import '../../css/a/a3mu-p47d.css';
import '../../css/y/yhcxlqcnk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="u88n9vd2w"/><path class="rg2c_ob_l"/><path class="a3mu-p47d"/><path class="yhcxlqcnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:galaxy-1"} {...others} />);
}

export default Component;
