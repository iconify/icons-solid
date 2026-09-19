import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_06tclpl.css';
import '../../css/z/z2y88ibfp.css';
import '../../css/g/govmrcrfb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p_06tclpl"/><path class="z2y88ibfp"/><path class="govmrcrfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:settings-services"} {...others} />);
}

export default Component;
