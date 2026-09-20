import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r7oukd81u.css';
import '../../css/o/ot8yzyb7e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r7oukd81u"/><path class="ot8yzyb7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:book-type"} {...others} />);
}

export default Component;
