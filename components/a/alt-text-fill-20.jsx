import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyt5vk0em.css';
import '../../css/a/aj1kvdbma.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nyt5vk0em"/><path class="aj1kvdbma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:alt-text-fill-20"} {...others} />);
}

export default Component;
