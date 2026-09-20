import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x85s4hwda.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x85s4hwda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lodestone-dark"} {...others} />);
}

export default Component;
