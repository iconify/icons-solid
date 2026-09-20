import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hffms2bcd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hffms2bcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:skip-right-fill"} {...others} />);
}

export default Component;
