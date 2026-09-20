import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j98rpibjb.css';
import '../../css/a/aaf9dhb8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j98rpibjb"/><path class="aaf9dhb8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:user-check-fill"} {...others} />);
}

export default Component;
