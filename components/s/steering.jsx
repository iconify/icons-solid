import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/das9g7b-w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="das9g7b-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:steering"} {...others} />);
}

export default Component;
