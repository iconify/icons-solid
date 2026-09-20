import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ehtc2bcgg.css';
import '../../css/g/gvi6q-b4n.css';
import '../../css/f/f1wz-qb2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ehtc2bcgg"/><path class="gvi6q-b4n"/><path class="f1wz-qb2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hand-two-fingers"} {...others} />);
}

export default Component;
