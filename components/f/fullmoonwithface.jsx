import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfj231j0y.css';
import '../../css/a/ayfs0cb5s.css';
import '../../css/w/wdxqc5bhz.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="sfj231j0y"/><path class="ayfs0cb5s"/><path class="wdxqc5bhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:fullmoonwithface"} {...others} />);
}

export default Component;
