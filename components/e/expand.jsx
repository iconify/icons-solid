import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jf2sa2bjg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jf2sa2bjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:expand"} {...others} />);
}

export default Component;
