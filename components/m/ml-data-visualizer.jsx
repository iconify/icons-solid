import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhsmtt9-j.css';
import '../../css/f/f_0sarbla.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qhsmtt9-j"/><path class="f_0sarbla ouiIcon__fillSecondary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:ml-data-visualizer"} {...others} />);
}

export default Component;
