import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ylj9ssb8i.css';
import '../../css/o/om9t3h1fs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ylj9ssb8i"/><path class="om9t3h1fs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:container"} {...others} />);
}

export default Component;
