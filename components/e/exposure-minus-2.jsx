import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sokcghe4g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sokcghe4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:exposure-minus-2"} {...others} />);
}

export default Component;
