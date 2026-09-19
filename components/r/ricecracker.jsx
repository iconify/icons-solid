import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofhjkacrl.css';
import '../../css/g/g53_4wpqu.css';
import '../../css/b/b7ri4q8vc.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="ofhjkacrl"/><path class="g53_4wpqu"/><path class="b7ri4q8vc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:ricecracker"} {...others} />);
}

export default Component;
