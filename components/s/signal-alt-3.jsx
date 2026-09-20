import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un2jr5b5x.css';
import '../../css/u/u6c0nebia.css';
import '../../css/m/m6vv16rhx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="un2jr5b5x"/><path class="u6c0nebia"/><path class="m6vv16rhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:signal-alt-3"} {...others} />);
}

export default Component;
