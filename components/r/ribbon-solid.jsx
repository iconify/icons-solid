import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eoxxp1nog.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eoxxp1nog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ribbon-solid"} {...others} />);
}

export default Component;
