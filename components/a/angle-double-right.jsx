import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdqco66am.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gdqco66am"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:angle-double-right"} {...others} />);
}

export default Component;
