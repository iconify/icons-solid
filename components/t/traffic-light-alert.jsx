import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adcbp-yaj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="adcbp-yaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:traffic-light-alert"} {...others} />);
}

export default Component;
