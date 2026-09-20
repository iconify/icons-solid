import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c16wjhrqn.css';
import '../../css/s/suncofbuf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c16wjhrqn"/><path class="suncofbuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:wifi-solid"} {...others} />);
}

export default Component;
