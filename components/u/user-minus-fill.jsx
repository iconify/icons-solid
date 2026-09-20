import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g19d38ucn.css';
import '../../css/a/aaf9dhb8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g19d38ucn"/><path class="aaf9dhb8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:user-minus-fill"} {...others} />);
}

export default Component;
