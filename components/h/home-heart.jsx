import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wivg6zlgt.css';
import '../../css/r/re1744ykz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wivg6zlgt"/><path class="re1744ykz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:home-heart"} {...others} />);
}

export default Component;
