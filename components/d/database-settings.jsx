import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8ots_bdl.css';
import '../../css/w/w1qg11bis.css';
import '../../css/e/ehgylhzlx.css';
import '../../css/p/pkebo2bbe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k8ots_bdl"/><path class="w1qg11bis"/><path clip-rule="evenodd" class="ehgylhzlx"/><path clip-rule="evenodd" class="pkebo2bbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:database-settings"} {...others} />);
}

export default Component;
