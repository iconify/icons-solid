import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/i/imgq4vbdd.css';
import '../../css/s/s3k7n_blg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="imgq4vbdd"/><path class="s3k7n_blg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:speed"} {...others} />);
}

export default Component;
