import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nesl1-bow.css';
import '../../css/c/clqqsk1lu.css';
import '../../css/e/e_79v64pq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nesl1-bow"/><path class="clqqsk1lu"/><path class="e_79v64pq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:tips-double"} {...others} />);
}

export default Component;
