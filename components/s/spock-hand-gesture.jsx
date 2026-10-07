import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nb1d4fcis.css';
import '../../css/g/gf98vm77j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nb1d4fcis"/><path class="gf98vm77j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:spock-hand-gesture"} {...others} />);
}

export default Component;
