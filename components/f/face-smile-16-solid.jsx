import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec21vyzpj.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ec21vyzpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:face-smile-16-solid"} {...others} />);
}

export default Component;
