import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h38z5cbna.css';
import '../../css/x/x_6no5bff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h38z5cbna"/><path class="x_6no5bff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:app-window-center"} {...others} />);
}

export default Component;
