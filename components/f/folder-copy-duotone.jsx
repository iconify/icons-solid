import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/quotw9ome.css';
import '../../css/s/sexne5okr.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGYIWHMbOu"><g class="ft5dv1b6b"><path class="quotw9ome"/><path class="sexne5okr"/></g></mask></defs><path mask="url(#SVGYIWHMbOu)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-copy-duotone"} {...others} />);
}

export default Component;
