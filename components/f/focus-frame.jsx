import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnvisfy4c.css';
import '../../css/m/m3qmq7bst.css';
import '../../css/s/ss_bl2bpe.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="pnvisfy4c"/><path class="m3qmq7bst"/><path class="ss_bl2bpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:focus-frame"} {...others} />);
}

export default Component;
