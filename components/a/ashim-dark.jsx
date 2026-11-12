import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iebr1bctr.css';
import '../../css/p/p1mbpccli.css';
import '../../css/e/e3l4mac6w.css';
import '../../css/i/il-pnhbun.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iebr1bctr"/><path class="p1mbpccli"/><path class="e3l4mac6w"/><path class="il-pnhbun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ashim-dark"} {...others} />);
}

export default Component;
