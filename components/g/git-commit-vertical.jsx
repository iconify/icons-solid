import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fnf6pdbdu.css';
import '../../css/g/gp0egaclj.css';
import '../../css/e/e2nq-yvbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fnf6pdbdu"/><circle class="gp0egaclj"/><path class="e2nq-yvbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:git-commit-vertical"} {...others} />);
}

export default Component;
