import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-cra3-wf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-cra3-wf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:folder-hold-bold"} {...others} />);
}

export default Component;
