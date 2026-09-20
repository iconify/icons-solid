import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0g3k3bwv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h0g3k3bwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:road-straight-bold"} {...others} />);
}

export default Component;
