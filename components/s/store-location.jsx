import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/cpy7c9ber.css';
import '../../css/f/flmz8db-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="cpy7c9ber"/><path class="flmz8db-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:store-location"} {...others} />);
}

export default Component;
