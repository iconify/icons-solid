import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9r61plyl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s9r61plyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:counter-analytics-light"} {...others} />);
}

export default Component;
