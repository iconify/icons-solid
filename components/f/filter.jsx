import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbeb90ock.css';
import '../../css/h/hmezibw8e.css';
import '../../css/m/mnjrvv75q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cbeb90ock wm-k"/><path class="hmezibw8e wm-k"/><path class="mnjrvv75q wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:filter"} {...others} />);
}

export default Component;
