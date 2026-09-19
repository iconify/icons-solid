import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fnh9tclws.css';
import '../../css/u/up4t6029a.css';
import '../../css/j/jvw8jgbjc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fnh9tclws"/><circle class="up4t6029a"/><path class="jvw8jgbjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:user-check"} {...others} />);
}

export default Component;
