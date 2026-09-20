import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fv9z5ggml.css';
import '../../css/o/o8wjvtbjz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fv9z5ggml"/><path class="o8wjvtbjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proton-pass-dark"} {...others} />);
}

export default Component;
