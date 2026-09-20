import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3as_xbml.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="y3as_xbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:power-outlet-type-j-bold"} {...others} />);
}

export default Component;
