import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d_mb6190u.css';
import '../../css/q/q6v7zwbwj.css';
import '../../css/y/yjo9i5b3u.css';
import '../../css/w/w5m7edbcj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="d_mb6190u"/><path class="q6v7zwbwj"/><path class="yjo9i5b3u"/><path class="w5m7edbcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-basket-check-out-02"} {...others} />);
}

export default Component;
