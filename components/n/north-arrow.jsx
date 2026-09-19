import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqc5nf5ck.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="nqc5nf5ck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:north-arrow"} {...others} />);
}

export default Component;
