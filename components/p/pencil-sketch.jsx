import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt38cn2hp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bt38cn2hp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:pencil-sketch"} {...others} />);
}

export default Component;
