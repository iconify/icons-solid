import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-bo3ibyd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v-bo3ibyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:typo3-light"} {...others} />);
}

export default Component;
