import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tfuztib6u.css';
import '../../css/p/p8tll5byp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tfuztib6u"/><path class="p8tll5byp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bean"} {...others} />);
}

export default Component;
