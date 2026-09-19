import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsy0p32fq.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="lsy0p32fq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:restricted"} {...others} />);
}

export default Component;
