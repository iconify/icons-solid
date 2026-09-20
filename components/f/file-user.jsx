import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oge_lhbou.css';
import '../../css/s/s9mgv7u5y.css';
import '../../css/i/ide5axbrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oge_lhbou"/><path class="s9mgv7u5y"/><circle class="ide5axbrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-user"} {...others} />);
}

export default Component;
