import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ru8mpqtzq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ru8mpqtzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:file-pdf-fill-16"} {...others} />);
}

export default Component;
