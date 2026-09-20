import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bfvqjac5l.css';
import '../../css/i/isld4f3te.css';
import '../../css/v/v8y1e5mbw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bfvqjac5l"/><path class="isld4f3te"/><path class="v8y1e5mbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:space-astronaut-alternate"} {...others} />);
}

export default Component;
