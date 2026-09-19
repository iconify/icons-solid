import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m223cpbhr.css';
import '../../css/p/pr_1mzb5o.css';
import '../../css/c/cc-gngndl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="m223cpbhr"/><circle class="pr_1mzb5o"/><path class="cc-gngndl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:api-key"} {...others} />);
}

export default Component;
