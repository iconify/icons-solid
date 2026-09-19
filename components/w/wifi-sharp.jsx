import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_f7a-bya.css';
import '../../css/f/fyzd6vw5z.css';
import '../../css/r/r16hmzbjt.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="e_f7a-bya"/><path clip-rule="evenodd" class="fyzd6vw5z"/><path clip-rule="evenodd" class="r16hmzbjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:wifi-sharp"} {...others} />);
}

export default Component;
