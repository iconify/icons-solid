import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gx8y2ds-k.css';
import '../../css/q/qfh1dz3dh.css';
import '../../css/d/denxdxots.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gx8y2ds-k"><path class="qfh1dz3dh"/><path class="denxdxots"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:align-top"} {...others} />);
}

export default Component;
