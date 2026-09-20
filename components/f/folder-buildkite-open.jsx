import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pffnfbbjn.css';
import '../../css/m/mcl56li3l.css';
import '../../css/n/nadh9-zvh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pffnfbbjn"/><path class="mcl56li3l"/><path class="nadh9-zvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-buildkite-open"} {...others} />);
}

export default Component;
