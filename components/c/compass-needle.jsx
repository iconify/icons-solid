import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gag0bqb4x.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="gag0bqb4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:compass-needle"} {...others} />);
}

export default Component;
