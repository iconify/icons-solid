import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdjh8tojm.css';
import '../../css/b/bst9txban.css';
import '../../css/f/ffydtswup.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hdjh8tojm"/><path class="bst9txban"/><path class="ffydtswup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:domainmod-dark"} {...others} />);
}

export default Component;
