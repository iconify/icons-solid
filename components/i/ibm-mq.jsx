import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e39vi3inw.css';
import '../../css/t/tpa9noblp.css';
import '../../css/o/ou9bix05e.css';
import '../../css/u/u58babtsd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="e39vi3inw"/><path class="tpa9noblp"/><path class="ou9bix05e"/><path class="u58babtsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-mq"} {...others} />);
}

export default Component;
