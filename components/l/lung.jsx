import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us4k6l1wv.css';
import '../../css/c/coxo34bks.css';
import '../../css/r/riptp7b9z.css';
import '../../css/b/blgbnccjb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="us4k6l1wv"><path class="coxo34bks"/><path class="riptp7b9z"/><path class="blgbnccjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:lung"} {...others} />);
}

export default Component;
