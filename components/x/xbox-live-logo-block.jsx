import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5zt5obnd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g5zt5obnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:xbox-live-logo-block"} {...others} />);
}

export default Component;
