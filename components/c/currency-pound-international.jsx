import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-q__zh2t.css';
import '../../css/b/b52_8hb3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o-q__zh2t"/><path class="b52_8hb3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:currency-pound-international"} {...others} />);
}

export default Component;
