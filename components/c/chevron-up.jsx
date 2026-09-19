import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdaswzbvz.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="pdaswzbvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:chevron-up"} {...others} />);
}

export default Component;
