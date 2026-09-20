import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr02q8bnz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="tr02q8bnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:memorial-stone-with-star-and-crescent"} {...others} />);
}

export default Component;
