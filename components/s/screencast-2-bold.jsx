import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxe30nuth.css';
import '../../css/i/i5z920-bz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oxe30nuth"/><path class="i5z920-bz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:screencast-2-bold"} {...others} />);
}

export default Component;
