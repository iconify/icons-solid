import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h222tpu7y.css';
import '../../css/n/noydw8btb.css';
import '../../css/l/l7vm4db0k.css';
import '../../css/c/cpjapdb7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h222tpu7y"/><path class="noydw8btb"/><path class="l7vm4db0k"/><path class="cpjapdb7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:shop-like"} {...others} />);
}

export default Component;
