import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6-lcumwc.css';
import '../../css/q/q6r9cfypp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j6-lcumwc"/><path class="q6r9cfypp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:material-for-mkdocs-light"} {...others} />);
}

export default Component;
