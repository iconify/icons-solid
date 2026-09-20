import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/govcx3bhc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="govcx3bhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:factr"} {...others} />);
}

export default Component;
