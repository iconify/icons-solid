import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtefmjolt.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/j/jzfxvzblz.css';
import '../../css/g/gz0i5bqap.css';
import '../../css/o/o-zxexbtq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jtefmjolt"/><g class="jn8qy4bru"><path class="jzfxvzblz"/><path class="gz0i5bqap"/><path class="o-zxexbtq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:thong-sandal"} {...others} />);
}

export default Component;
