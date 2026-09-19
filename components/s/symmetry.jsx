import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/c/cgb1b_ctt.css';
import '../../css/p/p8ik12bcj.css';
import '../../css/i/ib3dwix3e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="cgb1b_ctt"/><path class="p8ik12bcj"/><path class="ib3dwix3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:symmetry"} {...others} />);
}

export default Component;
