import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk7p9p4ic.css';
import '../../css/d/dj_nl9bot.css';
import '../../css/i/i0zetk6vj.css';
import '../../css/l/loe7u9xjt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dk7p9p4ic"/><path class="dj_nl9bot"/><path class="i0zetk6vj"/><path class="loe7u9xjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:golden"} {...others} />);
}

export default Component;
