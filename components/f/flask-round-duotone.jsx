import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6-u9uk-z.css';
import '../../css/p/p8q_2ebrp.css';
import '../../css/y/yu6g1gb2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b6-u9uk-z"/><path class="p8q_2ebrp"/><path class="yu6g1gb2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:flask-round-duotone"} {...others} />);
}

export default Component;
