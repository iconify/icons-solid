import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4nz665xn.css';
import '../../css/b/b6dmwqarl.css';
import '../../css/b/bwdyegfbl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a4nz665xn"/><path class="b6dmwqarl"/><path class="bwdyegfbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:marp-dark"} {...others} />);
}

export default Component;
