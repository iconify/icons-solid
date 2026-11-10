import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/b5gy8-r_a.css';
import '../../css/a/al3iiq8ht.css';
import '../../css/g/g8vwt0ued.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="b5gy8-r_a"/><path class="al3iiq8ht"/><path class="g8vwt0ued"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:eta-capital"} {...others} />);
}

export default Component;
