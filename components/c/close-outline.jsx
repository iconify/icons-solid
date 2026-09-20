import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgbr6jg2h.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="mgbr6jg2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:close-outline"} {...others} />);
}

export default Component;
