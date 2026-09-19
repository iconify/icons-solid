import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugv8qvw0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ugv8qvw0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:orange-slice-alt"} {...others} />);
}

export default Component;
