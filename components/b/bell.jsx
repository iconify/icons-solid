import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/w94s8abil.css';
import '../../css/s/s2lruqbjy.css';
import '../../css/e/eb3emgd-t.css';
import '../../css/f/f4wbe42jj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="w94s8abil"/><path class="s2lruqbjy"/><path class="eb3emgd-t"/><path class="f4wbe42jj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:bell"} {...others} />);
}

export default Component;
