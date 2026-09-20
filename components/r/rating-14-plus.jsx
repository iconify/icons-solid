import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l6v91xbnd.css';
import '../../css/d/dpmm53vzx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l6v91xbnd"/><path class="dpmm53vzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:rating-14-plus"} {...others} />);
}

export default Component;
