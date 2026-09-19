import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbiso1wff.css';
import '../../css/y/yhignzrec.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mbiso1wff"/><path class="yhignzrec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-evaluation"} {...others} />);
}

export default Component;
