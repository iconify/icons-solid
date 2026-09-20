import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r48o9ebhr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r48o9ebhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:t-mobile-dark"} {...others} />);
}

export default Component;
