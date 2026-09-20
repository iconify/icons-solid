import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w590n2jyo.css';
import '../../css/c/c8cpgrb_s.css';
import '../../css/w/wxj0babdb.css';
import '../../css/d/dv9yx6bkw.css';
import '../../css/j/j58td6bkg.css';

const viewBox = {"width":256,"height":288};
const content = `<path class="w590n2jyo"/><path class="c8cpgrb_s"/><path class="wxj0babdb"/><path class="dv9yx6bkw"/><path class="j58td6bkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cplusplus"} {...others} />);
}

export default Component;
