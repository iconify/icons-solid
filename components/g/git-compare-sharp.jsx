import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukd2hu43u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ukd2hu43u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-compare-sharp"} {...others} />);
}

export default Component;
