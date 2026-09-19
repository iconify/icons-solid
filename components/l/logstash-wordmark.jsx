import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5pdzmbry.css';
import '../../css/l/lm8lx4btl.css';
import '../../css/d/dvg27y9mf.css';
import '../../css/o/oi-s5cbqj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="a5pdzmbry"/><path class="lm8lx4btl"/><path class="dvg27y9mf"/><path class="oi-s5cbqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:logstash-wordmark"} {...others} />);
}

export default Component;
