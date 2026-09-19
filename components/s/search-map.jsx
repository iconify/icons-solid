import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ih1ndobif.css';
import '../../css/c/cy7ufpbyc.css';
import '../../css/h/hymfp_bcn.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ih1ndobif"/><path class="cy7ufpbyc"/><path class="hymfp_bcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:search-map"} {...others} />);
}

export default Component;
