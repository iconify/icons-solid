import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjqa4gy1b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cjqa4gy1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:steinberg-logo-block"} {...others} />);
}

export default Component;
