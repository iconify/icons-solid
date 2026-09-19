import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r97v5hw9i.css';
import '../../css/b/buzi5ibmp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="r97v5hw9i"/><path class="buzi5ibmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:medicine-bottle-one"} {...others} />);
}

export default Component;
