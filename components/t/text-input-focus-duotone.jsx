import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ehjdnrb9a.css';
import '../../css/r/rlin_rb8a.css';
import '../../css/s/saia9hbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ehjdnrb9a"/><path clip-rule="evenodd" class="rlin_rb8a"/><path class="saia9hbpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:text-input-focus-duotone"} {...others} />);
}

export default Component;
