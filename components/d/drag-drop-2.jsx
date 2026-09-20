import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9he1imzs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e9he1imzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:drag-drop-2"} {...others} />);
}

export default Component;
