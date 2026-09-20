import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chyip73rw.css';
import '../../css/i/iyrdw09zc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="chyip73rw"/><path clip-rule="evenodd" class="iyrdw09zc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:broom-line"} {...others} />);
}

export default Component;
