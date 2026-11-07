import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-mexebzb.css';
import '../../css/n/nbkh3ubia.css';
import '../../css/a/abgizhdkn.css';
import '../../css/b/bvct38blc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w-mexebzb"/><path class="nbkh3ubia"/><path class="abgizhdkn"/><path class="bvct38blc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grid-2x2-bold"} {...others} />);
}

export default Component;
