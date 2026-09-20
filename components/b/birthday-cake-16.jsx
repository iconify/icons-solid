import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhic9evto.css';
import '../../css/o/omhpelwiu.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="uhic9evto"/><path class="omhpelwiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:birthday-cake-16"} {...others} />);
}

export default Component;
