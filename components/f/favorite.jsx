import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3g3o-fjt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o3g3o-fjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:favorite"} {...others} />);
}

export default Component;
