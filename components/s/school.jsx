import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bf-39qigy.css';
import '../../css/o/o-xhkcqid.css';
import '../../css/r/rs-d_y_0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bf-39qigy"/><path class="o-xhkcqid"/><circle class="rs-d_y_0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:school"} {...others} />);
}

export default Component;
