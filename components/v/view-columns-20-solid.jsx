import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muu80cxvy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="muu80cxvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:view-columns-20-solid"} {...others} />);
}

export default Component;
