import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g647b6wru.css';
import '../../css/a/abpmulcbw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g647b6wru"/><path class="abpmulcbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-arrow-down-filled"} {...others} />);
}

export default Component;
