import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhr-1eb_k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dhr-1eb_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:androidauto-logo-block"} {...others} />);
}

export default Component;
