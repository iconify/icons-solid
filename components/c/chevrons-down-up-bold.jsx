import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7-5n80rg.css';
import '../../css/l/leb-08bqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a7-5n80rg"/><path class="leb-08bqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-down-up-bold"} {...others} />);
}

export default Component;
