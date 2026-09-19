import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7giafb7e.css';
import '../../css/a/az0bq2bba.css';

const viewBox = {"width":48,"height":48};
const content = `<circle class="e7giafb7e"/><path class="az0bq2bba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:ok"} {...others} />);
}

export default Component;
