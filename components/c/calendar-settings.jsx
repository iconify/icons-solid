import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/za8ehjb1q.css';
import '../../css/n/n_757dk6o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="za8ehjb1q"/><path class="n_757dk6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:calendar-settings"} {...others} />);
}

export default Component;
