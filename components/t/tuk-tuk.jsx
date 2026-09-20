import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eyjcz-sea.css';
import '../../css/u/ua1tn-b_w.css';
import '../../css/m/m9tnvhbhu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eyjcz-sea"/><path class="ua1tn-b_w"/><path class="m9tnvhbhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:tuk-tuk"} {...others} />);
}

export default Component;
