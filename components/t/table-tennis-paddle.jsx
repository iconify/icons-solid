import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mji30zbhe.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mji30zbhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:table-tennis-paddle"} {...others} />);
}

export default Component;
