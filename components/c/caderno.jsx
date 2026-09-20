import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di5_344sf.css';
import '../../css/j/jpo8em2jn.css';
import '../../css/k/k5xw5glig.css';
import '../../css/g/g62l6wbpm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="di5_344sf"/><path class="jpo8em2jn"/><path class="k5xw5glig"/><path class="g62l6wbpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:caderno"} {...others} />);
}

export default Component;
