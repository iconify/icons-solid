import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hr_oih2cb.css';

const viewBox = {"width":17,"height":16};
const content = `<path class="hr_oih2cb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:adjustment-horizon"} {...others} />);
}

export default Component;
