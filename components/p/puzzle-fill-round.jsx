import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/ve53p6bmv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ve53p6bmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:puzzle-fill-round"} {...others} />);
}

export default Component;
