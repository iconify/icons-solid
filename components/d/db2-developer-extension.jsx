import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpfp1dycz.css';
import '../../css/c/cqm6b97dt.css';
import '../../css/r/r5yn_xycd.css';
import '../../css/a/aa_op5b8m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cpfp1dycz"/><path class="cqm6b97dt"/><circle class="r5yn_xycd"/><path class="aa_op5b8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:db2-developer-extension"} {...others} />);
}

export default Component;
