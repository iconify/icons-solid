import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ril0c-ubp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ril0c-ubp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:dribbble-logo-block"} {...others} />);
}

export default Component;
