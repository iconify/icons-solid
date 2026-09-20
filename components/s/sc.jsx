import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr-alcbvt.css';
import '../../css/z/z2347ac7w.css';
import '../../css/m/mn75_48em.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tr-alcbvt"/><path class="z2347ac7w"/><path class="mn75_48em"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:sc"} {...others} />);
}

export default Component;
