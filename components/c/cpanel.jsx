import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9qs72-yo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v9qs72-yo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:cpanel"} {...others} />);
}

export default Component;
