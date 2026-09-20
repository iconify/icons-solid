import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghmldbc-a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ghmldbc-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:shield-cancel"} {...others} />);
}

export default Component;
