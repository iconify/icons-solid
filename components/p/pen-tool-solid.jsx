import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e1x2ahbep.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="e1x2ahbep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:pen-tool-solid"} {...others} />);
}

export default Component;
