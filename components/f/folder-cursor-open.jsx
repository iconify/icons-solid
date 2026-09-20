import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulas4swoq.css';
import '../../css/p/pxb9n0nrg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ulas4swoq"/><path class="pxb9n0nrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-cursor-open"} {...others} />);
}

export default Component;
