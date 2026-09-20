import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grcmtww9l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="grcmtww9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:broadcom-logo-solid"} {...others} />);
}

export default Component;
