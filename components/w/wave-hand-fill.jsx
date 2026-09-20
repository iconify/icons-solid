import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c54w_tbjw.css';
import '../../css/i/ifd5f2bkp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c54w_tbjw"/><path class="ifd5f2bkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:wave-hand-fill"} {...others} />);
}

export default Component;
