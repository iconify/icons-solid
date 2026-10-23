import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sj9s4025x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sj9s4025x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:octagon-alert"} {...others} />);
}

export default Component;
