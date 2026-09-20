import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h08_5_b7d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h08_5_b7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:hbo-max-logo-block"} {...others} />);
}

export default Component;
