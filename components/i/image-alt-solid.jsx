import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apugdvb-c.css';
import '../../css/p/pt1w2bihr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="apugdvb-c"/><path clip-rule="evenodd" class="pt1w2bihr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:image-alt-solid"} {...others} />);
}

export default Component;
