import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_uv8vbqv.css';
import '../../css/h/hfa8zub4k.css';
import '../../css/l/l3ji4rb0u.css';
import '../../css/a/ah9_-7b2g.css';
import '../../css/v/vocb67-bi.css';
import '../../css/c/c8pw6cgoz.css';
import '../../css/v/vjb5s4izh.css';

const viewBox = {"width":792,"height":792};
const content = `<path class="c_uv8vbqv"/><path class="hfa8zub4k"/><path class="l3ji4rb0u"/><path class="ah9_-7b2g"/><path class="vocb67-bi"/><path class="c8pw6cgoz"/><path class="vjb5s4izh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cert-manager-dark"} {...others} />);
}

export default Component;
