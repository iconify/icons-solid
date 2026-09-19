import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-p8jbcsj.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="e-p8jbcsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:tooth-outline"} {...others} />);
}

export default Component;
