import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9dp65n1d.css';
import '../../css/t/tqpzs3bol.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e9dp65n1d"/><path class="tqpzs3bol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:uno"} {...others} />);
}

export default Component;
