import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dv3pvwgew.css';
import '../../css/p/p3x9tjbzm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dv3pvwgew"/><path class="p3x9tjbzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:symptoms-virus-diarrhea-1"} {...others} />);
}

export default Component;
