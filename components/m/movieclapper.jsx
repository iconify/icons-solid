import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bthpj2-gq.css';

const viewBox = {"width":1026,"height":1024};
const content = `<path class="bthpj2-gq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:movieclapper"} {...others} />);
}

export default Component;
