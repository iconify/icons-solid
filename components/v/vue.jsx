import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njca8dbxl.css';
import '../../css/a/as0inn2-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="njca8dbxl"/><path class="as0inn2-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:vue"} {...others} />);
}

export default Component;
