import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/a/al5ogi_5h.css';
import '../../css/x/xbmv06bep.css';
import '../../css/c/cx51ovd2v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="al5ogi_5h"/><path class="xbmv06bep"/><path class="cx51ovd2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:female"} {...others} />);
}

export default Component;
