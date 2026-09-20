import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kw5k78k-f.css';
import '../../css/p/p9-zrkb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kw5k78k-f"/><path class="p9-zrkb4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrange-circle2"} {...others} />);
}

export default Component;
