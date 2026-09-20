import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcghi8bhd.css';
import '../../css/a/a_yeysi6i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wcghi8bhd"/><path class="a_yeysi6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:copy-paste-clipboard"} {...others} />);
}

export default Component;
