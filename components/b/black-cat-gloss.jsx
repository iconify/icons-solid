import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b9-v7ebor.css';
import '../../css/r/r6cqz_y8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="b9-v7ebor wm-k"/><path class="r6cqz_y8w wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:black-cat-gloss"} {...others} />);
}

export default Component;
