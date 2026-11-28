import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fk2y3hezu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fk2y3hezu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:donut-chart-search"} {...others} />);
}

export default Component;
