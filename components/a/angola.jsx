import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ci23lkb2t.css';
import '../../css/q/qfc3cc3so.css';
import '../../css/z/zvg42bbsx.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="ci23lkb2t"/><path class="qfc3cc3so"/><path class="zvg42bbsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:angola"} {...others} />);
}

export default Component;
