import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v803brfqk.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="v803brfqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:separation-horizontal-16"} {...others} />);
}

export default Component;
