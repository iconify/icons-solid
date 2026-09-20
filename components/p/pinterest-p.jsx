import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz7rbjocj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oz7rbjocj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:pinterest-p"} {...others} />);
}

export default Component;
