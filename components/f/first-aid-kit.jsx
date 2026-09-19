import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/s/s7-6_qziz.css';
import '../../css/d/ddl1lfbrb.css';
import '../../css/a/a96tixzoc.css';
import '../../css/k/kbh69udzs.css';
import '../../css/e/ete3kkyam.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="s7-6_qziz"/><path class="ddl1lfbrb"/><path class="a96tixzoc"/><path class="kbh69udzs"/><path class="ete3kkyam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:first-aid-kit"} {...others} />);
}

export default Component;
