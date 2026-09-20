import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iclr56bfn.css';
import '../../css/w/wdgf1rbow.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iclr56bfn"/><path class="wdgf1rbow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:stop-24"} {...others} />);
}

export default Component;
