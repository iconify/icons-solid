import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kfdo2-b2q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kfdo2-b2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:translation-updated-stroke-16"} {...others} />);
}

export default Component;
