import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv7zpptfp.css';
import '../../css/x/xnpc5acoh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gv7zpptfp"/><path class="xnpc5acoh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:nx"} {...others} />);
}

export default Component;
