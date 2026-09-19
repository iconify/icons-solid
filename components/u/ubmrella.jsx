import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jw2dlnbkb.css';
import '../../css/v/v9dpfoiga.css';
import '../../css/a/aoo_rum3k.css';
import '../../css/o/o8lh7zb8w.css';
import '../../css/t/t6re57f-o.css';

const viewBox = {"width":100,"height":100};
const content = `<path clip-rule="evenodd" class="jw2dlnbkb"/><path clip-rule="evenodd" class="v9dpfoiga"/><path clip-rule="evenodd" class="aoo_rum3k"/><path clip-rule="evenodd" class="o8lh7zb8w"/><path clip-rule="evenodd" class="t6re57f-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:ubmrella"} {...others} />);
}

export default Component;
