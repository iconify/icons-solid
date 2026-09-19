import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrgrc1b7s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qrgrc1b7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:adobe-creative-cloud"} {...others} />);
}

export default Component;
