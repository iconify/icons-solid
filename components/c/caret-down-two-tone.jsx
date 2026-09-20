import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l4nb2fkfj.css';
import '../../css/o/okv4jubwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l4nb2fkfj"/><path class="okv4jubwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:caret-down-two-tone"} {...others} />);
}

export default Component;
