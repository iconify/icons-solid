import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m2gy684ya.css';
import '../../css/m/md4gp-bjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="m2gy684ya"/><path class="md4gp-bjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:krea"} {...others} />);
}

export default Component;
