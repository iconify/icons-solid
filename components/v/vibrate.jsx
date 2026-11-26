import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vi7lznbga.css';
import '../../css/b/b2udxjbhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vi7lznbga"/><rect class="b2udxjbhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:vibrate"} {...others} />);
}

export default Component;
