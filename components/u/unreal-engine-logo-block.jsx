import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2qh80col.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p2qh80col"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:unreal-engine-logo-block"} {...others} />);
}

export default Component;
