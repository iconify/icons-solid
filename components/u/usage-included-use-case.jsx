import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4ap6cvjv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n4ap6cvjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:usage-included-use-case"} {...others} />);
}

export default Component;
