import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u5wmu6hoi.css';
import '../../css/n/nwr2oub_h.css';
import '../../css/a/av0kmmbuk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u5wmu6hoi"/><path class="nwr2oub_h"/><circle class="av0kmmbuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-search-corner"} {...others} />);
}

export default Component;
