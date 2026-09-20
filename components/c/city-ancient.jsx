import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9tgavc3e.css';
import '../../css/v/vekjkdo5u.css';
import '../../css/d/d9ffd7b_b.css';
import '../../css/p/pjx4eu_3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y9tgavc3e"/><path class="vekjkdo5u"/><path class="d9ffd7b_b"/><path class="pjx4eu_3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:city-ancient"} {...others} />);
}

export default Component;
