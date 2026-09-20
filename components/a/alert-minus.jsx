import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kncpq6wxt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kncpq6wxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:alert-minus"} {...others} />);
}

export default Component;
