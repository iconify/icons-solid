import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq7iz5vvk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wq7iz5vvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:hpe-labs"} {...others} />);
}

export default Component;
