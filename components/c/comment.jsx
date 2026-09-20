import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrdj_04qc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrdj_04qc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:comment"} {...others} />);
}

export default Component;
