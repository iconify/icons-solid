import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/oj0cnmyvq.css';
import '../../css/z/zsbqhtwas.css';
import '../../css/f/fioeuqbzc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="oj0cnmyvq"/><path class="zsbqhtwas"/><path class="fioeuqbzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:dropbox"} {...others} />);
}

export default Component;
