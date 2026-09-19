import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g74m3rybx.css';
import '../../css/c/cm4vl7bnc.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="g74m3rybx"/><path class="cm4vl7bnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ma-4x3"} {...others} />);
}

export default Component;
