import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhle38bke.css';
import '../../css/f/fsl5_2myu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qhle38bke"/><path class="fsl5_2myu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:xet"} {...others} />);
}

export default Component;
