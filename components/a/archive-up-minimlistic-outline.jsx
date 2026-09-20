import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuobntlfo.css';
import '../../css/r/r8h9qdcac.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iuobntlfo"/><path clip-rule="evenodd" class="r8h9qdcac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-up-minimlistic-outline"} {...others} />);
}

export default Component;
