import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkw1mrb_c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dkw1mrb_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:megaphone-24"} {...others} />);
}

export default Component;
