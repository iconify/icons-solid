import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogi60eb_u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ogi60eb_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:planet"} {...others} />);
}

export default Component;
