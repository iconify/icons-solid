import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qj9jdebvj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qj9jdebvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:vray-logo-block"} {...others} />);
}

export default Component;
