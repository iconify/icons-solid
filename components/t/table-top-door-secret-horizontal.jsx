import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gekxk_31h.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="gekxk_31h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:table-top-door-secret-horizontal"} {...others} />);
}

export default Component;
