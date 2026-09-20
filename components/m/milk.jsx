import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/o/ogfviyruo.css';
import '../../css/f/fbzqu81tc.css';
import '../../css/u/uxvwnyblj.css';
import '../../css/j/jq9w99g-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="ogfviyruo"/><path class="fbzqu81tc"/><path class="uxvwnyblj"/><path class="jq9w99g-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:milk"} {...others} />);
}

export default Component;
