import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sq304gt3i.css';
import '../../css/a/a7fo8bbwo.css';
import '../../css/b/bue9mkoxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sq304gt3i"/><path class="a7fo8bbwo"/><path class="bue9mkoxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cake-duotone"} {...others} />);
}

export default Component;
