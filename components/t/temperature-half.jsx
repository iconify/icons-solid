import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ku-h9g-aq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ku-h9g-aq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:temperature-half"} {...others} />);
}

export default Component;
