import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/poztdjbqd.css';
import '../../css/m/mxfuflb-o.css';
import '../../css/q/qd50ibxwv.css';
import '../../css/e/ehihs3tor.css';
import '../../css/y/yk-vagb6y.css';
import '../../css/z/zaiz7-mzb.css';

const viewBox = {"width":32,"height":32};
const content = `<defs/><path class="poztdjbqd"/><path class="mxfuflb-o"/><path class="qd50ibxwv"/><path class="ehihs3tor"/><path class="yk-vagb6y"/><path class="zaiz7-mzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:contour-edit"} {...others} />);
}

export default Component;
