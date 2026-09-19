import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhd17n_ca.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jhd17n_ca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:text-short-paragraph"} {...others} />);
}

export default Component;
