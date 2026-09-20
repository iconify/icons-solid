import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvhu8yb5r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wvhu8yb5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:advertisements-off"} {...others} />);
}

export default Component;
