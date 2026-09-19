import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z06xlpj0d.css';

const viewBox = {"width":256,"height":384};
const content = `<path class="z06xlpj0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:long-arrow-up"} {...others} />);
}

export default Component;
