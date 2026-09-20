import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ey68ddzco.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ey68ddzco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:d-arrow-right"} {...others} />);
}

export default Component;
