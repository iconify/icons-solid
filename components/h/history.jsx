import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl_lzhbfj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dl_lzhbfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:history"} {...others} />);
}

export default Component;
