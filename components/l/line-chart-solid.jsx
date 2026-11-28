import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tycc3pbxx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tycc3pbxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:line-chart-solid"} {...others} />);
}

export default Component;
