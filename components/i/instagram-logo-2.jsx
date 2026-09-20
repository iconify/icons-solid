import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/hgz4z8bqp.css';
import '../../css/d/dthmub82t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="hgz4z8bqp"/><path class="dthmub82t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:instagram-logo-2"} {...others} />);
}

export default Component;
