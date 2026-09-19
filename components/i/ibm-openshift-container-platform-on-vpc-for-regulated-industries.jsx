import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5ym2eb1u.css';
import '../../css/x/xvd21f26a.css';
import '../../css/p/pnz8p0bet.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="c5ym2eb1u"/><path class="xvd21f26a"/><path class="pnz8p0bet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-openshift-container-platform-on-vpc-for-regulated-industries"} {...others} />);
}

export default Component;
