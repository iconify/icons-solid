import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-61lmm4b.css';
import '../../css/v/v-wrjcb4c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l-61lmm4b"/><path class="v-wrjcb4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:font-size-bold"} {...others} />);
}

export default Component;
