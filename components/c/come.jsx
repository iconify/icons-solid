import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/parsp50es.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="parsp50es"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:come"} {...others} />);
}

export default Component;
