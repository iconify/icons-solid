import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pymb-abua.css';
import '../../css/r/r1etijbft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pymb-abua"/><path class="r1etijbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:gem-a"} {...others} />);
}

export default Component;
