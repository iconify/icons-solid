import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/effooqx5h.css';
import '../../css/b/bcg1qveom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="effooqx5h"/><path clip-rule="evenodd" class="bcg1qveom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:cat"} {...others} />);
}

export default Component;
