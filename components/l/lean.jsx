import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqme3kbqa.css';

const viewBox = {"width":4.5,"height":4.5,"left":-2,"top":-2};
const content = `<path class="uqme3kbqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:lean"} {...others} />);
}

export default Component;
