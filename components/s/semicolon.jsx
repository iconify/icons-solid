import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0_ywmbfa.css';

const viewBox = {"width":154,"height":767};
const content = `<path class="z0_ywmbfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:semicolon"} {...others} />);
}

export default Component;
