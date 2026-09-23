import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o8lhx-bno.css';
import '../../css/x/xas7jxixe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o8lhx-bno"/><path class="xas7jxixe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:credit-card-2-sparkles-fill"} {...others} />);
}

export default Component;
