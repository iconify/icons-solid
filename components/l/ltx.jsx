import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thlhudbvm.css';
import '../../css/u/ugbw2eb3a.css';
import '../../css/l/le_-26bvr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="thlhudbvm"/><path class="ugbw2eb3a"/><path class="le_-26bvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ltx"} {...others} />);
}

export default Component;
