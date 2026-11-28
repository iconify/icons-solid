import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evq3bovfu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="evq3bovfu primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chart-column-stacked-duotone"} {...others} />);
}

export default Component;
