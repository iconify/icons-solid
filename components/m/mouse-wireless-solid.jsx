import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ellu3obxb.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ellu3obxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:mouse-wireless-solid"} {...others} />);
}

export default Component;
