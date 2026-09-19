import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g62_debmy.css';
import '../../css/g/gx4l6kh5d.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="g62_debmy"/><path class="gx4l6kh5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:baseball"} {...others} />);
}

export default Component;
