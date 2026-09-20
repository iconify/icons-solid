import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl0md4byx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nl0md4byx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:ragged-flag-with-skull"} {...others} />);
}

export default Component;
