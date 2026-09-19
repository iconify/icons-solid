import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-_tg5nyk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h-_tg5nyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:pie-chart-25"} {...others} />);
}

export default Component;
