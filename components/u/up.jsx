import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxlo3ac_e.css';
import '../../css/x/xt4ay30jw.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="kxlo3ac_e"/><path class="xt4ay30jw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:up"} {...others} />);
}

export default Component;
