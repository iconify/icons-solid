import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qpocn1vvu.css';
import '../../css/g/gn42k5bkv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qpocn1vvu"/><path class="gn42k5bkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mobile3"} {...others} />);
}

export default Component;
