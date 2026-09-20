import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqqsz-bhg.css';
import '../../css/j/j_opgppca.css';

const viewBox = {"width":166,"height":34};
const content = `<path class="pqqsz-bhg prefix__path-mobile"/><path class="j_opgppca prefix__path-desktop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:godaddy-light"} {...others} />);
}

export default Component;
