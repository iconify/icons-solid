import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hskokab0p.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-1.5};
const content = `<path class="hskokab0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:flashlight-off-f"} {...others} />);
}

export default Component;
