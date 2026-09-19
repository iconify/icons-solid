import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smvtmjbjr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="smvtmjbjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:clear-formatting"} {...others} />);
}

export default Component;
