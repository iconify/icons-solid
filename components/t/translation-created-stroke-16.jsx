import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/de93w3jem.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="de93w3jem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:translation-created-stroke-16"} {...others} />);
}

export default Component;
