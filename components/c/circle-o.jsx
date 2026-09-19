import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnv8y4ccs.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="hnv8y4ccs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:circle-o"} {...others} />);
}

export default Component;
