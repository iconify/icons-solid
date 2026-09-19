import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_eg6bc1k.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="r_eg6bc1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:intensity-concentration-bioassays"} {...others} />);
}

export default Component;
