import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g9xv0vbnv.css';
import '../../css/j/j2px_1rfd.css';
import '../../css/w/w812ifbqt.css';
import '../../css/j/jlk8gwb4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="g9xv0vbnv"/><path class="j2px_1rfd"/><circle class="w812ifbqt"/><circle class="jlk8gwb4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:hamlet"} {...others} />);
}

export default Component;
