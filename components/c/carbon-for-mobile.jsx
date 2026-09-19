import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7wssw66i.css';
import '../../css/t/ttkwngbky.css';
import '../../css/l/lhg-6wa8v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d7wssw66i"/><circle class="ttkwngbky"/><path class="lhg-6wa8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:carbon-for-mobile"} {...others} />);
}

export default Component;
