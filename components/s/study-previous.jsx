import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rojvpmb6a.css';
import '../../css/j/jy3p094dk.css';
import '../../css/j/j_7wf_9wv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rojvpmb6a"/><path class="jy3p094dk"/><path class="j_7wf_9wv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:study-previous"} {...others} />);
}

export default Component;
