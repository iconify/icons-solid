import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-k06jxyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y-k06jxyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ventilator-alt-outline-24px"} {...others} />);
}

export default Component;
