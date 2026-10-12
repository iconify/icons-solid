import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wc85bcglw.css';
import '../../css/s/slcvs4yrl.css';
import '../../css/g/gdfre-uew.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wc85bcglw"/><path class="slcvs4yrl"/><path class="gdfre-uew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:files-filled"} {...others} />);
}

export default Component;
