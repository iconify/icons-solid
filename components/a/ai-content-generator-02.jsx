import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/idfcu2b1l.css';
import '../../css/z/z0f77_p2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="idfcu2b1l"/><path class="z0f77_p2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-content-generator-02"} {...others} />);
}

export default Component;
