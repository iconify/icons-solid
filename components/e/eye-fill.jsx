import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osl_ewbwa.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="osl_ewbwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:eye-fill"} {...others} />);
}

export default Component;
