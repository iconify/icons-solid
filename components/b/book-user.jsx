import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lxogbhe7j.css';
import '../../css/n/n9xma4bjh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lxogbhe7j"/><path class="n9xma4bjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:book-user"} {...others} />);
}

export default Component;
