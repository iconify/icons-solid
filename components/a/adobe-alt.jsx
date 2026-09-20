import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyioyxu9s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iyioyxu9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:adobe-alt"} {...others} />);
}

export default Component;
