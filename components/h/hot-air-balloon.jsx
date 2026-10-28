import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fb2ngd4wa.css';
import '../../css/y/yy-65r22i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fb2ngd4wa"/><path class="yy-65r22i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hot-air-balloon"} {...others} />);
}

export default Component;
