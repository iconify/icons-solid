import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uc5zuv2sx.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="uc5zuv2sx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:table-top-header"} {...others} />);
}

export default Component;
