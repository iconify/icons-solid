import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tso6gqw6r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tso6gqw6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:share-stroke-20"} {...others} />);
}

export default Component;
