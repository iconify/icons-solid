import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbt7gmrmq.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="mbt7gmrmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:stethoscope-16-solid"} {...others} />);
}

export default Component;
