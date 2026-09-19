import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c4eh4m8zs.css';
import '../../css/n/nsbkbugsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c4eh4m8zs"/><path class="nsbkbugsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:coffee-cup"} {...others} />);
}

export default Component;
