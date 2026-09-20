import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ol3qevala.css';
import '../../css/q/qlbh4ybeo.css';
import '../../css/k/kl16iub3v.css';
import '../../css/w/wvla7xgat.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ol3qevala"/><path class="qlbh4ybeo"/><path class="kl16iub3v"/><path class="wvla7xgat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:app-window-search-text"} {...others} />);
}

export default Component;
