import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9a09orqa.css';
import '../../css/e/ecr-u4bsa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q9a09orqa"/><path class="ecr-u4bsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:panel-left-close-48-bold"} {...others} />);
}

export default Component;
