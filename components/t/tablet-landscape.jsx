import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8ctqoumq.css';
import '../../css/e/e5-idrbop.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p8ctqoumq"/><path class="e5-idrbop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:tablet-landscape"} {...others} />);
}

export default Component;
