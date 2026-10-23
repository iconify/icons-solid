import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w7_jiub5n.css';
import '../../css/b/b5qebze5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w7_jiub5n"/><path class="b5qebze5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:clock-plus"} {...others} />);
}

export default Component;
