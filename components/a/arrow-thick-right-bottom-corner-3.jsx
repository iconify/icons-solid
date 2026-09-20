import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfdhb-19z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lfdhb-19z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:arrow-thick-right-bottom-corner-3"} {...others} />);
}

export default Component;
