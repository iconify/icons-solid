import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqa8yfaed.css';

const viewBox = {"width":1545,"height":1544};
const content = `<path class="mqa8yfaed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:gevernova-light"} {...others} />);
}

export default Component;
