import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fok2r0bey.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fok2r0bey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hand-pointer-fill"} {...others} />);
}

export default Component;
