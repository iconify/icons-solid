import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/er2a5vi2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="er2a5vi2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:trending-solid"} {...others} />);
}

export default Component;
