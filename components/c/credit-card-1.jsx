import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/pt65lxf3h.css';
import '../../css/e/em_84jeaq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="pt65lxf3h"/><path class="em_84jeaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:credit-card-1"} {...others} />);
}

export default Component;
