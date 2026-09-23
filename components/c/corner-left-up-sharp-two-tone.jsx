import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwlud-5vw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zwlud-5vw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:corner-left-up-sharp-two-tone"} {...others} />);
}

export default Component;
