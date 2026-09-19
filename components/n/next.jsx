import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erid2sbip.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="erid2sbip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:next"} {...others} />);
}

export default Component;
