import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amwc6obxc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="amwc6obxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:tablet-button"} {...others} />);
}

export default Component;
