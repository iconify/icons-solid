import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uek5jjtrg.css';
import '../../css/p/psb-p714j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uek5jjtrg"/><path class="psb-p714j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:circus-elephant-bold"} {...others} />);
}

export default Component;
