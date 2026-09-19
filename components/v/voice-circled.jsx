import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsgj5pbcl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dsgj5pbcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:voice-circled"} {...others} />);
}

export default Component;
