import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oav3xe.css';
import '../../css/q/qtbnay.css';
import '../../css/o/o9qm1a.css';
import '../../css/j/jqrlmu.css';
import '../../css/s/so-from-12.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oav3xe qtbnay"/><path class="o9qm1a qtbnay"/><path class="jqrlmu qtbnay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:grid-3-filled"} {...others} />);
}

export default Component;
