import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qwm_4jb1w.css';
import '../../css/j/jmbrci4fi.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="qwm_4jb1w"/><path class="jmbrci4fi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:page-search"} {...others} />);
}

export default Component;
