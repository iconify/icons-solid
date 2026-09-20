import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o1yqvdbsu.css';
import '../../css/t/tmb8qfb1t.css';
import '../../css/g/gjjdxf-5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o1yqvdbsu"/><path class="tmb8qfb1t"/><path class="gjjdxf-5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:shop5"} {...others} />);
}

export default Component;
