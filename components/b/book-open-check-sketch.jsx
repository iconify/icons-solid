import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b9qbfkbhi.css';
import '../../css/x/xa97w_bpi.css';
import '../../css/a/a2wzrrckz.css';
import '../../css/z/zixf3ibhr.css';
import '../../css/g/gsifqvbui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="b9qbfkbhi"/><path class="wm-k xa97w_bpi"/><path class="a2wzrrckz wm-a"/><path class="wm-k zixf3ibhr"/><path class="gsifqvbui wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:book-open-check-sketch"} {...others} />);
}

export default Component;
