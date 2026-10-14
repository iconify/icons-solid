import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xn184--be.css';
import '../../css/l/lyok8tb9e.css';
import '../../css/o/os09ombsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xn184--be"/><circle class="lyok8tb9e"/><rect class="os09ombsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:perfume-bottle"} {...others} />);
}

export default Component;
