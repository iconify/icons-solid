import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/y/ynccdtb1k.css';
import '../../css/z/z6t0ywb2m.css';
import '../../css/y/y18p54b9l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="ynccdtb1k"/><path class="z6t0ywb2m"/><path class="y18p54b9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:aviation"} {...others} />);
}

export default Component;
