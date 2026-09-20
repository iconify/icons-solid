import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qs7-zybgo.css';
import '../../css/h/hwwfh42ne.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qs7-zybgo"/><path class="hwwfh42ne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:elastos"} {...others} />);
}

export default Component;
