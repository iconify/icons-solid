import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sws1y7b5y.css';
import '../../css/a/a8-k6ckwt.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="sws1y7b5y"/><path class="a8-k6ckwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:globe-smiley"} {...others} />);
}

export default Component;
