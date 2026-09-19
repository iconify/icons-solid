import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zg8176b8y.css';
import '../../css/v/vxxvskbna.css';
import '../../css/y/y6pi65bko.css';
import '../../css/d/dg65s3b2f.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zg8176b8y"/><path class="vxxvskbna"/><path clip-rule="evenodd" class="y6pi65bko"/><path class="dg65s3b2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:hamburger"} {...others} />);
}

export default Component;
