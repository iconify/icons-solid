import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ry5of6-pd.css';
import '../../css/a/a_81q4h6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ry5of6-pd"/><path class="a_81q4h6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:currency-taka"} {...others} />);
}

export default Component;
