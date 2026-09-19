import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubvq29b5w.css';
import '../../css/u/uoci6xb9o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ubvq29b5w"/><path class="uoci6xb9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:login"} {...others} />);
}

export default Component;
