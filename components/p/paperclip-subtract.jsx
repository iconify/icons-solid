import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pimuhx55s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pimuhx55s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:paperclip-subtract"} {...others} />);
}

export default Component;
