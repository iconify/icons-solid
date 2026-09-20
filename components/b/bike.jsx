import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l005-rw7v.css';
import '../../css/d/d-e424q9g.css';
import '../../css/f/ftoxqwbpl.css';
import '../../css/b/byt_zx-un.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="l005-rw7v"/><circle class="d-e424q9g"/><circle class="ftoxqwbpl"/><path class="byt_zx-un"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bike"} {...others} />);
}

export default Component;
