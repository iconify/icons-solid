import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/girafxs9b.css';
import '../../css/c/cyluz262a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="girafxs9b"/><path class="cyluz262a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid-carrier-blood-2"} {...others} />);
}

export default Component;
