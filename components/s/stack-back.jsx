import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/svp4mtwbr.css';
import '../../css/n/ng7-lg29j.css';
import '../../css/j/jdxmchbqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="svp4mtwbr"/><path class="ng7-lg29j"/><path class="jdxmchbqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:stack-back"} {...others} />);
}

export default Component;
