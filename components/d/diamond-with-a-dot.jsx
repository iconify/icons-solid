import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uahbzrg7r.css';
import '../../css/k/kjz-bdcwf.css';
import '../../css/n/ng43d4bop.css';
import '../../css/f/fo2cscuki.css';
import '../../css/v/v48dila8m.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="uahbzrg7r"/><path class="kjz-bdcwf"/><path class="ng43d4bop"/><path class="fo2cscuki"/><path class="v48dila8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:diamond-with-a-dot"} {...others} />);
}

export default Component;
