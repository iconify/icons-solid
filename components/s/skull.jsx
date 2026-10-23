import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/egymh8boe.css';
import '../../css/s/smshui4ff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="egymh8boe"/><path class="smshui4ff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:skull"} {...others} />);
}

export default Component;
