import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpbcez6dc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tpbcez6dc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:help-circle-gloss"} {...others} />);
}

export default Component;
