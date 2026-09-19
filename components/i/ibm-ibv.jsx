import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2m5zi2on.css';
import '../../css/y/yadluib6y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y2m5zi2on"/><path class="yadluib6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-ibv"} {...others} />);
}

export default Component;
