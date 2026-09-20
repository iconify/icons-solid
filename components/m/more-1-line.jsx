import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7q918bhw.css';
import '../../css/q/qmjk3ab0b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o7q918bhw"/><path class="qmjk3ab0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:more-1-line"} {...others} />);
}

export default Component;
