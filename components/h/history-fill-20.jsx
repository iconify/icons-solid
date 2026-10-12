import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pydxmub-s.css';
import '../../css/s/sru-zac9m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pydxmub-s"/><path class="sru-zac9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:history-fill-20"} {...others} />);
}

export default Component;
