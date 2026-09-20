import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e1il69f6r.css';
import '../../css/r/ruq_o-b0w.css';
import '../../css/y/ym_-idjnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="e1il69f6r"/><path class="ruq_o-b0w"/><path class="ym_-idjnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:human-resources-rating-man"} {...others} />);
}

export default Component;
