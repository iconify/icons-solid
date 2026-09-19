import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/e/e8jxhdczm.css';
import '../../css/n/ndtovtbdh.css';
import '../../css/z/z5pl6n_8y.css';
import '../../css/a/aox-enbea.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="e8jxhdczm"/><path class="ndtovtbdh"/><rect class="z5pl6n_8y"/><path class="aox-enbea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:locking-laptop"} {...others} />);
}

export default Component;
