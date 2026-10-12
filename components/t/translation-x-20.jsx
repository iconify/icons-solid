import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uaz4rm-bq.css';
import '../../css/k/kpyqg9v7m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uaz4rm-bq"/><path class="kpyqg9v7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:translation-x-20"} {...others} />);
}

export default Component;
