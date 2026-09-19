import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ndmrztbsq.css';
import '../../css/a/a96k7rbus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ndmrztbsq"/><circle class="a96k7rbus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:truck"} {...others} />);
}

export default Component;
