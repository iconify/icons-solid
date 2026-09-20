import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acs_d8b1b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="acs_d8b1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:peertube-24"} {...others} />);
}

export default Component;
