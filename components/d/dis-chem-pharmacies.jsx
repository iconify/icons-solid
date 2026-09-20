import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jq3--4d3c.css';
import '../../css/a/abmezcb4l.css';
import '../../css/q/ql5xkwbzs.css';

const viewBox = {"width":1594,"height":1595};
const content = `<path class="jq3--4d3c"/><path class="abmezcb4l"/><path class="ql5xkwbzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dis-chem-pharmacies"} {...others} />);
}

export default Component;
