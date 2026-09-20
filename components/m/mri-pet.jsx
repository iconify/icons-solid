import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjvh8st1n.css';
import '../../css/x/xmtno77zy.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="gjvh8st1n"/><path class="xmtno77zy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:mri-pet"} {...others} />);
}

export default Component;
