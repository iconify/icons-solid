import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzsz5ybha.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="kzsz5ybha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:person-circle-exclamation"} {...others} />);
}

export default Component;
