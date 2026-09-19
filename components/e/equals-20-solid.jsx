import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di1mk4dfd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="di1mk4dfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:equals-20-solid"} {...others} />);
}

export default Component;
