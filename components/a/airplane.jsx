import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qh7r9_dwi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qh7r9_dwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:airplane"} {...others} />);
}

export default Component;
