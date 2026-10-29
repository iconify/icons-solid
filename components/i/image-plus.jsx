import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xo0i1_b_u.css';
import '../../css/l/l9hjlob4u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xo0i1_b_u"/><path class="l9hjlob4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:image-plus"} {...others} />);
}

export default Component;
