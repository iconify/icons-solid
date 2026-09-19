import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uq_e-5a3x.css';
import '../../css/c/ccabu7-zs.css';
import '../../css/r/r1s5d0b7w.css';
import '../../css/s/s5s3axb9e.css';
import '../../css/s/sth1wzbzb.css';
import '../../css/a/arro1ccpu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="uq_e-5a3x"/><path class="ccabu7-zs"/><path class="r1s5d0b7w"/><path class="s5s3axb9e"/><path class="sth1wzbzb"/><path class="arro1ccpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hippopotamus"} {...others} />);
}

export default Component;
