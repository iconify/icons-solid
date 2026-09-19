import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izgbh1b6s.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="izgbh1b6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:hand-lizard"} {...others} />);
}

export default Component;
