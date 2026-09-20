import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bmdy_ibsv.css';
import '../../css/g/gbdaidb5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bmdy_ibsv"/><path class="gbdaidb5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:make-up-lipstick-1"} {...others} />);
}

export default Component;
