import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0yn9qbkq.css';
import '../../css/s/s86mizbgb.css';
import '../../css/e/ejqsmfboo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p0yn9qbkq"/><path class="s86mizbgb"/><path class="ejqsmfboo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:database-1-bold"} {...others} />);
}

export default Component;
