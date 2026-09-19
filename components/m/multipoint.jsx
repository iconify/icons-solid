import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jq9w7bkbd.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="jq9w7bkbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:multipoint"} {...others} />);
}

export default Component;
