import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjh0zxifh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mjh0zxifh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:app-window-gear"} {...others} />);
}

export default Component;
