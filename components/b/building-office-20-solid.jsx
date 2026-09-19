import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb95-1bon.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="jb95-1bon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:building-office-20-solid"} {...others} />);
}

export default Component;
