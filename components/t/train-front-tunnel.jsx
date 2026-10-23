import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bc8t59kfo.css';
import '../../css/n/n4k9xpbft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bc8t59kfo"/><path class="n4k9xpbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:train-front-tunnel"} {...others} />);
}

export default Component;
