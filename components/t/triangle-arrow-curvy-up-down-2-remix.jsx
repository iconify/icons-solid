import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmrm1ub4g.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="qmrm1ub4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:triangle-arrow-curvy-up-down-2-remix"} {...others} />);
}

export default Component;
