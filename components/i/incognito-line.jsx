import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xkf6ttbje.css';
import '../../css/a/a96k7rbus.css';
import '../../css/c/ceitnjb9j.css';
import '../../css/w/wy2n5sbyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xkf6ttbje"/><circle class="a96k7rbus"/><circle class="ceitnjb9j"/><path class="wy2n5sbyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:incognito-line"} {...others} />);
}

export default Component;
