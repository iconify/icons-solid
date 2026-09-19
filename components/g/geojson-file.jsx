import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ks04u331z.css';
import '../../css/a/a-sqa4bwz.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ks04u331z"/><path class="a-sqa4bwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:geojson-file"} {...others} />);
}

export default Component;
