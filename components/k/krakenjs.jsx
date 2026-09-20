import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twauhb0da.css';
import '../../css/h/h7czjmprx.css';

const viewBox = {"width":256,"height":274};
const content = `<path class="twauhb0da"/><path class="h7czjmprx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:krakenjs"} {...others} />);
}

export default Component;
