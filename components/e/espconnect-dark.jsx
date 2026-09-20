import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etg9crbrk.css';
import '../../css/x/x2l7nqbwr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="etg9crbrk"/><path class="x2l7nqbwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:espconnect-dark"} {...others} />);
}

export default Component;
