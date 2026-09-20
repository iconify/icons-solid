import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jz_vj9-yg.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="jz_vj9-yg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:expand-alt-solid"} {...others} />);
}

export default Component;
