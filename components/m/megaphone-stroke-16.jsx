import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ci8phsb1v.css';
import '../../css/r/rzz4edc1o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ci8phsb1v"/><path class="rzz4edc1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:megaphone-stroke-16"} {...others} />);
}

export default Component;
