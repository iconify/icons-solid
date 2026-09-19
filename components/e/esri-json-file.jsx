import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rrvehib-t.css';
import '../../css/x/xm21wv__h.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="rrvehib-t"/><path class="xm21wv__h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:esri-json-file"} {...others} />);
}

export default Component;
