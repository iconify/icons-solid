import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcoa8gbfx.css';
import '../../css/c/cnkm8cblh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bcoa8gbfx"/><path class="cnkm8cblh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:baseball"} {...others} />);
}

export default Component;
