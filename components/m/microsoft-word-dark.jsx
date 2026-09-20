import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9m6urblh.css';
import '../../css/u/uqb-_iblt.css';
import '../../css/t/tnrg1vfjo.css';
import '../../css/b/b7yq6dbnh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j9m6urblh"/><path class="uqb-_iblt"/><path class="tnrg1vfjo"/><path class="b7yq6dbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-word-dark"} {...others} />);
}

export default Component;
