import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bhkr1l7aq.css';
import '../../css/h/hwsal5q-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bhkr1l7aq"/><circle class="hwsal5q-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:planet"} {...others} />);
}

export default Component;
