import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6ik5tbsh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w6ik5tbsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:broadcast-pin"} {...others} />);
}

export default Component;
