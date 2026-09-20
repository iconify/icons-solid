import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0up79biy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q0up79biy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:browser-page-layout-bold"} {...others} />);
}

export default Component;
