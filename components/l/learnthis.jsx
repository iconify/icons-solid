import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9vps2b8q.css';
import '../../css/i/i2nyp1b4x.css';
import '../../css/n/n3xsaaczl.css';

const viewBox = {"width":45,"height":45};
const content = `<path class="c9vps2b8q"/><path class="i2nyp1b4x"/><path class="n3xsaaczl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:learnthis"} {...others} />);
}

export default Component;
