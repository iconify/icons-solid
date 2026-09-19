import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5qs4zbpz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b5qs4zbpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:plus-20-solid"} {...others} />);
}

export default Component;
