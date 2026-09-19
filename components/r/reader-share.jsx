import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7vvir64i.css';
import '../../css/r/roi1-go0j.css';

const viewBox = {"width":24,"height":24};
const content = `<clipPath id="SVGWLziubJw"><path class="t7vvir64i"/></clipPath><g clip-path="url(#SVGWLziubJw)"><path class="roi1-go0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:reader-share"} {...others} />);
}

export default Component;
