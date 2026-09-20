import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzj8i4mvb.css';

const viewBox = {"width":1920,"height":1080};
const content = `<path clip-rule="evenodd" class="tzj8i4mvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:wash-bicycle-14"} {...others} />);
}

export default Component;
