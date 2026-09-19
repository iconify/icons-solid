import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6hbulb-g.css';
import '../../css/t/tcuq2ituc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j6hbulb-g"/><path class="tcuq2ituc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:left-down2"} {...others} />);
}

export default Component;
