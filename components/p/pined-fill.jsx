import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jdfsopbtm.css';
import '../../css/v/v5m2bbblg.css';
import '../../css/g/grqzasb1o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jdfsopbtm"/><path class="v5m2bbblg"/><path class="grqzasb1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pined-fill"} {...others} />);
}

export default Component;
