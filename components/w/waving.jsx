import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ef8aux6xb.css';
import '../../css/q/qj-zi5d8b.css';
import '../../css/g/gl8ihcujq.css';
import '../../css/f/fur0iv6zf.css';
import '../../css/t/tc3eu0bdc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ef8aux6xb"/><path class="qj-zi5d8b"/><path class="gl8ihcujq"/><path class="fur0iv6zf"/><path class="tc3eu0bdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:waving"} {...others} />);
}

export default Component;
