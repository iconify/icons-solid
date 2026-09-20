import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-6j15bmw.css';
import '../../css/w/w96tcbb1z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o-6j15bmw"/><path class="w96tcbb1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:time-clock-circle"} {...others} />);
}

export default Component;
