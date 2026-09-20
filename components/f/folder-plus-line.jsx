import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ouaz_3bzx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ouaz_3bzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:folder-plus-line"} {...others} />);
}

export default Component;
