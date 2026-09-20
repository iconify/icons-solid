import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rukjgpvbh.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rukjgpvbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:table-with-umbrella-and-chairs"} {...others} />);
}

export default Component;
