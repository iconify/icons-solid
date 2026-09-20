import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3dnj8n0d.css';
import '../../css/z/zsrd_jbcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p3dnj8n0d"/><path class="zsrd_jbcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mbl"} {...others} />);
}

export default Component;
