import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/v/vmemh6b6j.css';
import '../../css/n/ne0kupbtr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="vmemh6b6j"/><path class="ne0kupbtr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:paypal-logo"} {...others} />);
}

export default Component;
