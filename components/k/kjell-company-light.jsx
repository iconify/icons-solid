import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmb9b00_p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jmb9b00_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kjell-company-light"} {...others} />);
}

export default Component;
