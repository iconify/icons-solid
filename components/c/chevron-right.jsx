import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubbzq5eml.css';

const viewBox = {"width":160,"height":384};
const content = `<path class="ubbzq5eml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:chevron-right"} {...others} />);
}

export default Component;
