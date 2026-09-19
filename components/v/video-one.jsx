import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/w/wbtbukbtl.css';
import '../../css/v/v58kzqg6v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="wbtbukbtl"/><circle class="v58kzqg6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:video-one"} {...others} />);
}

export default Component;
