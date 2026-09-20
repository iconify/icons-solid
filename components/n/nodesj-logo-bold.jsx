import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-vq-9o6f.css';
import '../../css/r/rdw81lbud.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f-vq-9o6f"/><path class="rdw81lbud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:nodesj-logo-bold"} {...others} />);
}

export default Component;
