import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j13493x8w.css';
import '../../css/o/owp4ymbuq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j13493x8w"/><path class="owp4ymbuq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:paper-bag"} {...others} />);
}

export default Component;
