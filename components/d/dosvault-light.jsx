import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0usn5b3x.css';
import '../../css/r/r36ju6ckj.css';
import '../../css/z/zf0_a8yec.css';
import '../../css/e/eswxi_jtw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k0usn5b3x"/><path class="r36ju6ckj"/><path class="zf0_a8yec"/><path class="eswxi_jtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dosvault-light"} {...others} />);
}

export default Component;
