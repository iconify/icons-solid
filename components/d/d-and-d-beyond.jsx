import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otk7xqulb.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="otk7xqulb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:d-and-d-beyond"} {...others} />);
}

export default Component;
