import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zl_izsb3t.css';
import '../../css/u/u2m1clbem.css';
import '../../css/h/h8z7x8vhi.css';
import '../../css/a/asyncdozy.css';
import '../../css/s/sycqn2b9e.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="zl_izsb3t"/><path class="u2m1clbem"/><path class="h8z7x8vhi"/><path class="asyncdozy"/><path class="sycqn2b9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pager"} {...others} />);
}

export default Component;
