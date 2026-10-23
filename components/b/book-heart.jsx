import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lxogbhe7j.css';
import '../../css/b/b-8lveh5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lxogbhe7j"/><path class="b-8lveh5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:book-heart"} {...others} />);
}

export default Component;
