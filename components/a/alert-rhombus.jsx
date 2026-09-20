import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2yu1ib7l.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="h2yu1ib7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:alert-rhombus"} {...others} />);
}

export default Component;
