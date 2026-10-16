import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xuy4_ccyv.css';
import '../../css/f/ftntsh43y.css';
import '../../css/m/medvff8qk.css';

const viewBox = {"width":334.8,"height":305.416};
const content = `<g class="xuy4_ccyv"><path class="ftntsh43y"/><path class="medvff8qk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:baby-buddy"} {...others} />);
}

export default Component;
