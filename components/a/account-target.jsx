import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/f7seu1b9y.css';
import '../../css/b/bvgu2n8nq.css';
import '../../css/r/ryx1s5b-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="f7seu1b9y"/><path class="bvgu2n8nq"/><path class="ryx1s5b-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:account-target"} {...others} />);
}

export default Component;
