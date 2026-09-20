import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ytbydc89d.css';
import '../../css/p/p0in47oqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ytbydc89d"/><path class="p0in47oqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:variable"} {...others} />);
}

export default Component;
