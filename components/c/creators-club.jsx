import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6c56ebta.css';
import '../../css/u/ulpze-4na.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q6c56ebta"/><path class="ulpze-4na"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:creators-club"} {...others} />);
}

export default Component;
