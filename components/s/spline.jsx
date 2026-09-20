import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bopi9b9jn.css';
import '../../css/f/fxwnb7vgp.css';
import '../../css/n/nrw1tbcax.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="bopi9b9jn"/><circle class="fxwnb7vgp"/><path class="nrw1tbcax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:spline"} {...others} />);
}

export default Component;
