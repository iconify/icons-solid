import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f5mkz9bge.css';
import '../../css/c/ca1r-kbfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f5mkz9bge"/><path class="ca1r-kbfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-adobe-photoshop"} {...others} />);
}

export default Component;
