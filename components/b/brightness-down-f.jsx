import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8xe44b8o.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-3.5};
const content = `<path class="u8xe44b8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:brightness-down-f"} {...others} />);
}

export default Component;
