import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/il0hwjnhw.css';
import '../../css/w/w-_7y_bds.css';
import '../../css/b/bcw8vgbgs.css';
import '../../css/k/kxrlahbnk.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="il0hwjnhw"/><path class="w-_7y_bds"/><path class="bcw8vgbgs"/><path class="kxrlahbnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:television-play"} {...others} />);
}

export default Component;
