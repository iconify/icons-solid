import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ze59dyhlm.css';
import '../../css/g/g34s5wbgd.css';
import '../../css/z/z0kq6bb5i.css';
import '../../css/v/vixwthbht.css';
import '../../css/a/acf1h4pvt.css';
import '../../css/c/cfx1q448n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ze59dyhlm"/><path class="g34s5wbgd"/><path class="z0kq6bb5i"/><path class="vixwthbht"/><path class="acf1h4pvt"/><path class="cfx1q448n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:clapping-hands-dark"} {...others} />);
}

export default Component;
