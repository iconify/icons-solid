import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/erzeiv-ot.css';
import '../../css/w/whgfoj3ew.css';
import '../../css/z/z6bfi4byi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="erzeiv-ot"/><path class="whgfoj3ew"/><path class="z6bfi4byi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:three-d-cube-scan"} {...others} />);
}

export default Component;
