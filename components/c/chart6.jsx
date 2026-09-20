import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ygpc1b9aj.css';
import '../../css/h/h6a79lkvl.css';
import '../../css/n/n8oahhi7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ygpc1b9aj"/><path class="h6a79lkvl"/><path class="n8oahhi7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:chart6"} {...others} />);
}

export default Component;
