import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prw1abc4s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="prw1abc4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:play-20-solid"} {...others} />);
}

export default Component;
