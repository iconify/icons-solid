import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6xgii.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-1.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q6xgii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:filter-filled"} {...others} />);
}

export default Component;
