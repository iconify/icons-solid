import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xe03g2-dk.css';
import '../../css/i/igs44wb9p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xe03g2-dk"/><path class="igs44wb9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:wink-tongue"} {...others} />);
}

export default Component;
