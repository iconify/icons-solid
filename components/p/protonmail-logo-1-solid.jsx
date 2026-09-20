import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mht6kb53d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mht6kb53d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:protonmail-logo-1-solid"} {...others} />);
}

export default Component;
