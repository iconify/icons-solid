import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/ss9ec4bfo.css';
import '../../css/i/i1lofvn4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ss9ec4bfo"/><path class="i1lofvn4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:super-intelligence-setting"} {...others} />);
}

export default Component;
