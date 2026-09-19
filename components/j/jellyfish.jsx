import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/maox2bkih.css';
import '../../css/o/o_u3gc25v.css';
import '../../css/w/w_0ig1bcw.css';
import '../../css/y/yoy5mzbkg.css';
import '../../css/c/chbcmx24t.css';
import '../../css/j/jlzrqnb_h.css';
import '../../css/d/d8g70pbvb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="maox2bkih"/><path clip-rule="evenodd" class="o_u3gc25v"/><path class="w_0ig1bcw"/><path clip-rule="evenodd" class="yoy5mzbkg"/><path clip-rule="evenodd" class="chbcmx24t"/><path clip-rule="evenodd" class="jlzrqnb_h"/><path clip-rule="evenodd" class="d8g70pbvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:jellyfish"} {...others} />);
}

export default Component;
