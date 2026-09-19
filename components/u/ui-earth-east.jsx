import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9sb1r7in.css';
import '../../css/z/zmirjg79h.css';
import '../../css/b/b6spzmbdx.css';
import '../../css/m/mai5xwbnq.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="f9sb1r7in"/><path class="zmirjg79h"/><path class="b6spzmbdx"/><path class="mai5xwbnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"geo:ui-earth-east"} {...others} />);
}

export default Component;
