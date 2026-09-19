import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-ptz9fvg.css';
import '../../css/o/o04p_sbfu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q-ptz9fvg"/><path class="o04p_sbfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-down-square-half"} {...others} />);
}

export default Component;
