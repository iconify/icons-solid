import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o19vw7hlu.css';
import '../../css/a/a2s72obzp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o19vw7hlu"/><path clip-rule="evenodd" class="a2s72obzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:undeploy"} {...others} />);
}

export default Component;
