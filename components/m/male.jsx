import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/t/t9xmsgbyk.css';
import '../../css/n/n8z6g4nql.css';
import '../../css/g/g0hz8nbtf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="t9xmsgbyk"/><path class="n8z6g4nql"/><path class="g0hz8nbtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:male"} {...others} />);
}

export default Component;
