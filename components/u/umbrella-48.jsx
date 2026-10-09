import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfommlbzh.css';
import '../../css/f/fhdrc_nuc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hfommlbzh"/><path class="fhdrc_nuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:umbrella-48"} {...others} />);
}

export default Component;
