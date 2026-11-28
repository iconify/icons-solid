import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yzkly3sbo.css';
import '../../css/y/yygmp_b7f.css';
import '../../css/h/h-e7xhb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yzkly3sbo"/><path class="yygmp_b7f"/><path class="h-e7xhb5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:fold-vertical"} {...others} />);
}

export default Component;
