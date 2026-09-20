import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvhfowbwj.css';
import '../../css/g/g07g3bsws.css';
import '../../css/a/alue3ml6o.css';
import '../../css/x/x2lh0-b2f.css';
import '../../css/d/d-ia66bac.css';
import '../../css/m/m1421cuim.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xvhfowbwj"/><path class="g07g3bsws"/><path class="alue3ml6o"/><path class="x2lh0-b2f"/><path class="d-ia66bac"/><path class="m1421cuim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:freepbx"} {...others} />);
}

export default Component;
