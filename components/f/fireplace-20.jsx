import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ic7c4od3i.css';
import '../../css/a/aciwzxbfa.css';
import '../../css/q/qya8mr1nr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ic7c4od3i"/><path class="aciwzxbfa"/><path class="qya8mr1nr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fireplace-20"} {...others} />);
}

export default Component;
