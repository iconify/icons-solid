import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gn70etb5j.css';
import '../../css/r/rwhirn2vi.css';
import '../../css/y/ygb5cvfor.css';
import '../../css/o/on6asnbix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gn70etb5j"/><path class="rwhirn2vi"/><path class="ygb5cvfor"/><path class="on6asnbix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:microphone-2"} {...others} />);
}

export default Component;
