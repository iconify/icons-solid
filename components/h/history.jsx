import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnxhovbed.css';
import '../../css/o/o5bl2wrlr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pnxhovbed"/><path class="o5bl2wrlr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:history"} {...others} />);
}

export default Component;
