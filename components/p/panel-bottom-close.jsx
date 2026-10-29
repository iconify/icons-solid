import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/opfc4tb7c.css';
import '../../css/d/dqyqhkzap.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="opfc4tb7c"/><path class="dqyqhkzap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:panel-bottom-close"} {...others} />);
}

export default Component;
