import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hl7hgnbal.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hl7hgnbal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:folder-multiple-plus"} {...others} />);
}

export default Component;
