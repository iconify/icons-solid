import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_8gq7b9j.css';
import '../../css/x/x4u8pbwjc.css';
import '../../css/d/d29f8cc3k.css';
import '../../css/g/g9uyd9f6p.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/j/j6_oz0b1h.css';
import '../../css/d/d--ft7bfy.css';
import '../../css/n/n2976lbcz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z_8gq7b9j"/><g class="x4u8pbwjc"><circle class="d29f8cc3k"/><path class="g9uyd9f6p"/></g><g class="x8poo_bjf"><circle class="d29f8cc3k"/><path class="j6_oz0b1h"/><path class="d--ft7bfy"/><path class="n2976lbcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-swimming"} {...others} />);
}

export default Component;
