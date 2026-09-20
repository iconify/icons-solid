import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x-f33z91j.css';
import '../../css/g/gkwo4nyhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x-f33z91j"/><path class="gkwo4nyhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:printer-off"} {...others} />);
}

export default Component;
