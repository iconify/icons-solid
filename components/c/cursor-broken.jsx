import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wql0g2wcl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wql0g2wcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cursor-broken"} {...others} />);
}

export default Component;
