import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8pln-eug.css';
import '../../css/m/mf521kb7u.css';
import '../../css/g/gj0x8hb9r.css';
import '../../css/x/xtyjrwb7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s8pln-eug"/><path class="mf521kb7u"/><path class="gj0x8hb9r"/><path class="xtyjrwb7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:xava"} {...others} />);
}

export default Component;
