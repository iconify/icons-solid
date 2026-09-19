import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3kc6x8kr.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="g3kc6x8kr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:alt-text-fill-12"} {...others} />);
}

export default Component;
