import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/g/gqzrcgbas.css';
import '../../css/t/t3es0cbgl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="gqzrcgbas"/><path clip-rule="evenodd" class="t3es0cbgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hand-up"} {...others} />);
}

export default Component;
