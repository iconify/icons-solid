import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z8g2jgblp.css';
import '../../css/d/dqolircih.css';
import '../../css/f/fggvvekwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z8g2jgblp"/><circle class="dqolircih"/><circle class="fggvvekwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:divide-line"} {...others} />);
}

export default Component;
