import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bju99-9zx.css';
import '../../css/p/pl4wrbb3x.css';
import '../../css/y/yhlbi21sm.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="bju99-9zx"/><path class="pl4wrbb3x"/><path class="yhlbi21sm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:ambulance"} {...others} />);
}

export default Component;
