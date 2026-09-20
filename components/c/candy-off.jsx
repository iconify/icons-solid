import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g2o213vhp.css';
import '../../css/z/z362ur8tb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g2o213vhp"/><path class="z362ur8tb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:candy-off"} {...others} />);
}

export default Component;
