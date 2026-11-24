import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p9lqnjuwa.css';
import '../../css/v/v7wgf53bu.css';
import '../../css/i/iohxa7xbn.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="p9lqnjuwa"/><path clip-rule="evenodd" class="v7wgf53bu"/><path clip-rule="evenodd" class="iohxa7xbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:logo-yandex-id"} {...others} />);
}

export default Component;
