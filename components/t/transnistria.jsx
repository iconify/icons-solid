import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v746_xxbt.css';
import '../../css/p/p-36ppbwo.css';
import '../../css/g/gvecnl_9x.css';
import '../../css/j/j84icywvn.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="v746_xxbt"/><path class="p-36ppbwo"/><path class="gvecnl_9x"/><path class="j84icywvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:transnistria"} {...others} />);
}

export default Component;
