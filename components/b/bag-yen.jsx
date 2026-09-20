import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yb_mnyegm.css';
import '../../css/a/ab00bfbvi.css';
import '../../css/w/wkzd-db3w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="yb_mnyegm"/><path class="ab00bfbvi"/><path class="wkzd-db3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bag-yen"} {...others} />);
}

export default Component;
