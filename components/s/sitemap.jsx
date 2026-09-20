import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrbn05bgs.css';
import '../../css/b/boo849bbg.css';
import '../../css/z/zf2mmcbib.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nrbn05bgs"/><path class="boo849bbg"/><path class="zf2mmcbib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:sitemap"} {...others} />);
}

export default Component;
