import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b441swb4b.css';
import '../../css/f/fkf53bc3t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b441swb4b"/><path class="fkf53bc3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:single-select-16"} {...others} />);
}

export default Component;
