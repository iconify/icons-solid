import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syd7371ke.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="syd7371ke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:sun"} {...others} />);
}

export default Component;
