import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndp62j9zc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ndp62j9zc primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:shuffle-duotone"} {...others} />);
}

export default Component;
