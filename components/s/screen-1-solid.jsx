import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hax0k24xg.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="hax0k24xg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:screen-1-solid"} {...others} />);
}

export default Component;
