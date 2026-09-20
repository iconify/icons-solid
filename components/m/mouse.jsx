import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/nyxdt81yi.css';
import '../../css/a/a645d4eea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="nyxdt81yi"/><path class="a645d4eea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:mouse"} {...others} />);
}

export default Component;
