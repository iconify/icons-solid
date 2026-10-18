import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxfn2sbdi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qxfn2sbdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:app-window-mac"} {...others} />);
}

export default Component;
