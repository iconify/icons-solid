import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/htfy8iboz.css';
import '../../css/c/ci9n5fg2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="htfy8iboz"/><path class="ci9n5fg2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:compasses"} {...others} />);
}

export default Component;
