import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kf-5qjqrv.css';
import '../../css/n/nt8ol8b-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kf-5qjqrv"/><path class="nt8ol8b-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:bookmark-check"} {...others} />);
}

export default Component;
