import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/u/uzon_7fuc.css';
import '../../css/f/fs84avluu.css';
import '../../css/g/ghmy92bez.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="uzon_7fuc"/><path class="fs84avluu"/><path class="ghmy92bez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sailboat-one"} {...others} />);
}

export default Component;
