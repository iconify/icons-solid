import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ac9dembib.css';
import '../../css/z/zx2waxb7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ac9dembib"/><path class="zx2waxb7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:lamp-charge"} {...others} />);
}

export default Component;
