import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/scnjp3e5g.css';
import '../../css/b/bri85kbqp.css';
import '../../css/r/r5v9wkb7y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="scnjp3e5g"/><circle class="bri85kbqp"/><path class="r5v9wkb7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:barbecue"} {...others} />);
}

export default Component;
