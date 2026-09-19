import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rqc3h8bog.css';
import '../../css/r/r_4du_b0o.css';
import '../../css/v/vbd1tacft.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="rqc3h8bog"/><path class="r_4du_b0o"/><path class="vbd1tacft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:newspaper"} {...others} />);
}

export default Component;
