import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/bg8urccdb.css';
import '../../css/k/kcxl2ijeo.css';
import '../../css/b/b-0idgfsf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="bg8urccdb"/><path class="kcxl2ijeo"/><path class="b-0idgfsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ascending-alphabetical-order"} {...others} />);
}

export default Component;
