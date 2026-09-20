import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/iff0bs3cv.css';
import '../../css/o/o2fc5ib8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="iff0bs3cv"/><path class="o2fc5ib8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:dentistry-tooth-shield"} {...others} />);
}

export default Component;
