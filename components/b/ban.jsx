import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d69qx8wnb.css';
import '../../css/y/yk8gzfbyb.css';
import '../../css/g/gjhu6jbtz.css';
import '../../css/w/wpa-0dsyc.css';
import '../../css/q/qia92gbmg.css';
import '../../css/y/y1xdnzb2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d69qx8wnb wm-shadow"/><path class="wm-k yk8gzfbyb"/><path class="gjhu6jbtz wm-k"/><path class="wm-k wpa-0dsyc"/><path class="qia92gbmg wm-k"/><path class="wm-shine y1xdnzb2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:ban"} {...others} />);
}

export default Component;
