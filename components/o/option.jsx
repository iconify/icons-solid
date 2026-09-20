import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3ob0rwgj.css';
import '../../css/m/m7levstwq.css';
import '../../css/b/b770eaceb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q3ob0rwgj"/><path class="m7levstwq"/><path class="b770eaceb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:option"} {...others} />);
}

export default Component;
