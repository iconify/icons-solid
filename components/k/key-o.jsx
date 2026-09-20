import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eurq1d2or.css';
import '../../css/t/tav9lxblw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="eurq1d2or"/><path class="tav9lxblw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:key-o"} {...others} />);
}

export default Component;
