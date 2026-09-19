import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc73pgb_z.css';
import '../../css/v/v8c632q8y.css';
import '../../css/b/byp3pi26u.css';
import '../../css/o/o8bzwub_y.css';
import '../../css/q/q34r7ccaw.css';

const viewBox = {"width":100,"height":100};
const content = `<path clip-rule="evenodd" class="oc73pgb_z"/><path class="v8c632q8y"/><ellipse class="byp3pi26u"/><ellipse class="o8bzwub_y"/><path clip-rule="evenodd" class="q34r7ccaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:toilet-paper"} {...others} />);
}

export default Component;
