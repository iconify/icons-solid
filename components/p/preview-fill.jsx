import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2ik1qbwi.css';
import '../../css/d/ddoe6f8-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f2ik1qbwi"/><path class="ddoe6f8-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:preview-fill"} {...others} />);
}

export default Component;
