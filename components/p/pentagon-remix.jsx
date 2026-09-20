import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw_gh8mfn.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="zw_gh8mfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:pentagon-remix"} {...others} />);
}

export default Component;
