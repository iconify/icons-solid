import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gz7zuh0jo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gz7zuh0jo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:database-16"} {...others} />);
}

export default Component;
