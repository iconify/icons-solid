import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zoqu5x3aw.css';
import '../../css/d/d827kub-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zoqu5x3aw"/><path class="d827kub-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:hbo-logo"} {...others} />);
}

export default Component;
