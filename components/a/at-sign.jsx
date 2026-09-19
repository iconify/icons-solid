import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mgdjfwbfp.css';
import '../../css/a/a8md-191f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mgdjfwbfp"/><path class="a8md-191f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:at-sign"} {...others} />);
}

export default Component;
