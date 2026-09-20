import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8r5a9xgh.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="q8r5a9xgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:nature-ecology-cat-head-cat-pet-animals-felyne"} {...others} />);
}

export default Component;
