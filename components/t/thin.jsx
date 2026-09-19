import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr36qhbyi.css';
import '../../css/h/ha8c5xb3s.css';
import '../../css/y/ye1b94bts.css';
import '../../css/y/yscia7iil.css';
import '../../css/a/axdqi9bao.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="tr36qhbyi"><path class="ha8c5xb3s"/><path class="ye1b94bts"/><path class="yscia7iil"/><path class="axdqi9bao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:thin"} {...others} />);
}

export default Component;
