import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7qvhrbja.css';
import '../../css/q/q-q0i_h1e.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v7qvhrbja"/><path class="q-q0i_h1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:copy-clipboard"} {...others} />);
}

export default Component;
