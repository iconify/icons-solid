import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwj6unb5t.css';
import '../../css/k/kcfkgy84u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rwj6unb5t"/><path clip-rule="evenodd" class="kcfkgy84u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:travel-compass"} {...others} />);
}

export default Component;
