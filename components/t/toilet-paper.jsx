import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/ba62n8bqd.css';
import '../../css/s/sfhwmx87h.css';
import '../../css/k/k9dr9igzi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="ba62n8bqd"/><ellipse class="sfhwmx87h"/><path class="k9dr9igzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:toilet-paper"} {...others} />);
}

export default Component;
