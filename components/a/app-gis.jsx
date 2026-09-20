import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkt5ohbxh.css';
import '../../css/u/ukfpmsbhg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ouiIcon__fillSecondary xkt5ohbxh"/><path class="ukfpmsbhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-gis"} {...others} />);
}

export default Component;
