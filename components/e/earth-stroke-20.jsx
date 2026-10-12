import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7mn0ssnc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b7mn0ssnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:earth-stroke-20"} {...others} />);
}

export default Component;
