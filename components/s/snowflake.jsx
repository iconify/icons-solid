import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fboa2bbqg.css';
import '../../css/m/mspcjjimr.css';
import '../../css/t/tx_-ynbzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="fboa2bbqg wm-k"/><path class="mspcjjimr wm-a"/><path class="tx_-ynbzk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:snowflake"} {...others} />);
}

export default Component;
