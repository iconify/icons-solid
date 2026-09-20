import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eljc5bb9w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eljc5bb9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:check-thick-solid"} {...others} />);
}

export default Component;
