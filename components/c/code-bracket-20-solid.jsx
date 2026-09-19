import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spw5_r41r.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="spw5_r41r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:code-bracket-20-solid"} {...others} />);
}

export default Component;
