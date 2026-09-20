import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ug_ngt74t.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="ug_ngt74t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:elevator"} {...others} />);
}

export default Component;
