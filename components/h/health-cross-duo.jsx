import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy7mlyd3q.css';
import '../../css/i/iet5dccbc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary sy7mlyd3q"/><path class="iet5dccbc primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:health-cross-duo"} {...others} />);
}

export default Component;
