import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jiat6mbef.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jiat6mbef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:aim-logo-solid"} {...others} />);
}

export default Component;
