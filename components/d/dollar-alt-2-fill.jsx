import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bsgld8g3i.css';
import '../../css/x/x1x9uub3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bsgld8g3i"/><path clip-rule="evenodd" class="x1x9uub3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:dollar-alt-2-fill"} {...others} />);
}

export default Component;
