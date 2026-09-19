import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/s/scnf1b84q.css';
import '../../css/r/rdtq9xb-o.css';
import '../../css/e/ecnlh9tzj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3wR1bd4e"><g class="rohhhzb0l"><path class="scnf1b84q"/><path class="rdtq9xb-o"/><path class="ecnlh9tzj"/></g></mask></defs><path mask="url(#SVG3wR1bd4e)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:incoming"} {...others} />);
}

export default Component;
