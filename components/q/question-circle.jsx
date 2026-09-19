import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kr0qy3oxi.css';
import '../../css/o/ord0w9bkf.css';
import '../../css/b/b-o8jrzbf.css';
import '../../css/f/fxmuycpog.css';
import '../../css/w/w_p8aqbwn.css';
import '../../css/z/zew5u803v.css';
import '../../css/n/ncw8ebcjx.css';
import '../../css/v/vfkc7mqen.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><circle class="kr0qy3oxi"/><circle class="ord0w9bkf"/><path class="b-o8jrzbf"/><path class="fxmuycpog"/><path clip-rule="evenodd" class="w_p8aqbwn"/><path clip-rule="evenodd" class="zew5u803v"/><path clip-rule="evenodd" class="ncw8ebcjx"/><path clip-rule="evenodd" class="vfkc7mqen"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:question-circle"} {...others} />);
}

export default Component;
