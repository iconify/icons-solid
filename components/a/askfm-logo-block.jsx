import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/od05kr4ry.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="od05kr4ry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:askfm-logo-block"} {...others} />);
}

export default Component;
