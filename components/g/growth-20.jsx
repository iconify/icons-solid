import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmle-2ous.css';
import '../../css/y/yi354_nqc.css';
import '../../css/v/v7fhe39su.css';
import '../../css/y/yct5lw59k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nmle-2ous"/><path class="yi354_nqc"/><path class="v7fhe39su"/><path class="yct5lw59k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:growth-20"} {...others} />);
}

export default Component;
