import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wyg7z5kjh.css';
import '../../css/s/suqmocc3n.css';
import '../../css/d/dft9gzb8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wyg7z5kjh"/><path class="suqmocc3n"/><path class="dft9gzb8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:dam-duotone"} {...others} />);
}

export default Component;
