import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swb92wcvj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="swb92wcvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:code-climate-logo-block"} {...others} />);
}

export default Component;
