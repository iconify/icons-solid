import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xe5x2sqyg.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="xe5x2sqyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:table-top-door-one-way-up"} {...others} />);
}

export default Component;
