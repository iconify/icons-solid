import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6wl880iz.css';
import '../../css/g/gzs8_jbiw.css';
import '../../css/i/i5vl1gfpx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m6wl880iz"/><path class="gzs8_jbiw"/><path class="i5vl1gfpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:object-group"} {...others} />);
}

export default Component;
