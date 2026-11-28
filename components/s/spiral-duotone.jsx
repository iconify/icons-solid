import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj--0qmpo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nj--0qmpo primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:spiral-duotone"} {...others} />);
}

export default Component;
