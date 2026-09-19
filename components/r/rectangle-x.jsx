import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/x/xr-qo0lhr.css';
import '../../css/x/xangi0z_b.css';
import '../../css/y/y113g6bmt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="xr-qo0lhr"/><path class="xangi0z_b"/><path class="y113g6bmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rectangle-x"} {...others} />);
}

export default Component;
