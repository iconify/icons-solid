import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in1dviszv.css';
import '../../css/e/e01ahhbat.css';
import '../../css/f/fxp24xyhf.css';
import '../../css/d/d4-ztdu4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="in1dviszv"><path class="e01ahhbat"/><path class="fxp24xyhf"/><path class="d4-ztdu4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bill4"} {...others} />);
}

export default Component;
