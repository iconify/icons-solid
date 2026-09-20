import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h49p6u_wv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h49p6u_wv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:align-center-solid"} {...others} />);
}

export default Component;
