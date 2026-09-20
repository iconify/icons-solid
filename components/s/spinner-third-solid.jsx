import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2dlbbb1m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v2dlbbb1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:spinner-third-solid"} {...others} />);
}

export default Component;
