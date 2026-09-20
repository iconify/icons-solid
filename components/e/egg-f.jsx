import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcsw2jb2a.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-1.5};
const content = `<path class="wcsw2jb2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:egg-f"} {...others} />);
}

export default Component;
