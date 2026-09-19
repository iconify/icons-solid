import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g35llpa4c.css';

const viewBox = {"width":16,"height":24};
const content = `<path class="g35llpa4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:lightbulb"} {...others} />);
}

export default Component;
