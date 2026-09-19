import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mr8u2x3pd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mr8u2x3pd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:right-arrow-circle"} {...others} />);
}

export default Component;
