import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p50x5tbmw.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="p50x5tbmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:layout-window-1-solid"} {...others} />);
}

export default Component;
