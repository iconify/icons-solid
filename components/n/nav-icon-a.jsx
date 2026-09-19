import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arxjvacib.css';

const viewBox = {"width":28,"height":24};
const content = `<path class="arxjvacib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:nav-icon-a"} {...others} />);
}

export default Component;
