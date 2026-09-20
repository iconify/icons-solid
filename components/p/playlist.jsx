import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgffi2p2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fgffi2p2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:playlist"} {...others} />);
}

export default Component;
