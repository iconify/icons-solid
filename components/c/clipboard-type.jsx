import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s5lpn11ei.css';
import '../../css/f/f21qdeb7h.css';
import '../../css/d/dv5-6nbft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="s5lpn11ei"/><path class="f21qdeb7h"/><path class="dv5-6nbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:clipboard-type"} {...others} />);
}

export default Component;
