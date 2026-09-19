import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utg4a_brp.css';
import '../../css/o/o104vdwci.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="utg4a_brp"/><path class="o104vdwci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-subtract"} {...others} />);
}

export default Component;
