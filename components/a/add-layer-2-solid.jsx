import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5mb7ejud.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="r5mb7ejud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:add-layer-2-solid"} {...others} />);
}

export default Component;
