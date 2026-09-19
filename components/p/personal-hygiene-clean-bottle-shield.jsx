import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/utta4pe_h.css';
import '../../css/b/binpxj9wb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="utta4pe_h"/><path class="binpxj9wb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:personal-hygiene-clean-bottle-shield"} {...others} />);
}

export default Component;
