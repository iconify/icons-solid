import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qo2ttybuy.css';

const viewBox = {"width":851,"height":1000};
const content = `<path class="qo2ttybuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontelico:emo-cry"} {...others} />);
}

export default Component;
