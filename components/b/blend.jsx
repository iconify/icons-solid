import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lgpmj5glp.css';
import '../../css/v/v98c6hqtn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="lgpmj5glp"/><circle class="v98c6hqtn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:blend"} {...others} />);
}

export default Component;
