import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ha7yqp6ru.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ha7yqp6ru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:shocked-face"} {...others} />);
}

export default Component;
