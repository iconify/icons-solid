import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p17ta5bkl.css';
import '../../css/o/o472wkbka.css';
import '../../css/z/zxdzj-r_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p17ta5bkl"/><path class="o472wkbka"/><path class="zxdzj-r_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:image-sparkles-duotone"} {...others} />);
}

export default Component;
