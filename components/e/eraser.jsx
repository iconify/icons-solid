import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i50zk7duk.css';
import '../../css/a/a_3ga6bbw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i50zk7duk"/><path class="a_3ga6bbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:eraser"} {...others} />);
}

export default Component;
