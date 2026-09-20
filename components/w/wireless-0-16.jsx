import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pyjr-7brw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pyjr-7brw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:wireless-0-16"} {...others} />);
}

export default Component;
