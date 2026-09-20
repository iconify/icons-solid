import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrk2ewb9i.css';
import '../../css/y/y4k_89boh.css';
import '../../css/p/puc0_5gte.css';
import '../../css/u/u04za1bxy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lrk2ewb9i"/><path clip-rule="evenodd" class="y4k_89boh"/><path clip-rule="evenodd" class="puc0_5gte"/><path class="u04za1bxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:reading-time"} {...others} />);
}

export default Component;
