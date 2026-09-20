import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5pwa2bid.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="t5pwa2bid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:select-circle-area-1-remix"} {...others} />);
}

export default Component;
