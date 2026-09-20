import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lkd0labxu.css';
import '../../css/s/szx5i3qoh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lkd0labxu"/><path class="szx5i3qoh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cat"} {...others} />);
}

export default Component;
