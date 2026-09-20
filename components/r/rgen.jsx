import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/af786g-gs.css';
import '../../css/t/tf51z5b-b.css';
import '../../css/e/e5y3liomb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="af786g-gs"/><path class="tf51z5b-b"/><path class="e5y3liomb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:rgen"} {...others} />);
}

export default Component;
