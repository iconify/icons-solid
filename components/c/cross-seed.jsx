import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnrmsfh-l.css';
import '../../css/h/hdnx13uec.css';
import '../../css/r/ruvlv2d2c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gnrmsfh-l"/><path class="hdnx13uec"/><path class="ruvlv2d2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cross-seed"} {...others} />);
}

export default Component;
