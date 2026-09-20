import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elac0jvzd.css';
import '../../css/p/p9v66kg_a.css';
import '../../css/a/a03h6bchc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="elac0jvzd"/><circle class="p9v66kg_a"/><circle class="a03h6bchc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:musical-score"} {...others} />);
}

export default Component;
