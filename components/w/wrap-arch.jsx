import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/ypsz_k6lp.css';
import '../../css/b/b-9usgbzm.css';
import '../../css/q/qhvvzgbog.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ypsz_k6lp"/><path class="b-9usgbzm"/><path class="qhvvzgbog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:wrap-arch"} {...others} />);
}

export default Component;
