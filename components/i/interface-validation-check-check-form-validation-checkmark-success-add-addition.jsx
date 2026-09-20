import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmco-5kri.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rmco-5kri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-validation-check-check-form-validation-checkmark-success-add-addition"} {...others} />);
}

export default Component;
