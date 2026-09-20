import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/b38l9ebmj.css';
import '../../css/d/dp8g2dbaz.css';
import '../../css/j/jnn3kmblf.css';
import '../../css/o/os_pxozit.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="b38l9ebmj"/><path class="dp8g2dbaz"/><path class="jnn3kmblf"/><path class="os_pxozit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:cog"} {...others} />);
}

export default Component;
