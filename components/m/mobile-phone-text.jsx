import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/d/d8m79rbjp.css';
import '../../css/w/wz3f1kb2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="d8m79rbjp"/><path class="wz3f1kb2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:mobile-phone-text"} {...others} />);
}

export default Component;
