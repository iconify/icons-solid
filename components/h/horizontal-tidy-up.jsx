import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3_j8y16n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q3_j8y16n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:horizontal-tidy-up"} {...others} />);
}

export default Component;
