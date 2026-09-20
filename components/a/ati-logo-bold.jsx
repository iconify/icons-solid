import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwaanvb0r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iwaanvb0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:ati-logo-bold"} {...others} />);
}

export default Component;
