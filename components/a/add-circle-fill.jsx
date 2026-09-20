import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ii-15nbsq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ii-15nbsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:add-circle-fill"} {...others} />);
}

export default Component;
