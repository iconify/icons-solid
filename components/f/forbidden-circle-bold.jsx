import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7_w9-itf.css';
import '../../css/z/zn77u3fhb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g7_w9-itf"/><path class="zn77u3fhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:forbidden-circle-bold"} {...others} />);
}

export default Component;
