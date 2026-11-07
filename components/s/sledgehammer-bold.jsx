import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaeey4wki.css';
import '../../css/v/v1sgvk7sy.css';
import '../../css/o/oq1kt7b-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qaeey4wki"/><path class="v1sgvk7sy"/><path class="oq1kt7b-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sledgehammer-bold"} {...others} />);
}

export default Component;
