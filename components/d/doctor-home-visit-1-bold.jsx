import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzzun0bwv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xzzun0bwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:doctor-home-visit-1-bold"} {...others} />);
}

export default Component;
