import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7tu5e_1v.css';
import '../../css/k/kesyiabml.css';
import '../../css/p/p9m0wgbmb.css';
import '../../css/b/b5rjm52mb.css';
import '../../css/f/fq4_qkb3m.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z7tu5e_1v"/><path class="kesyiabml"/><path class="p9m0wgbmb"/><path class="b5rjm52mb"/><path class="fq4_qkb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:growing-heart"} {...others} />);
}

export default Component;
