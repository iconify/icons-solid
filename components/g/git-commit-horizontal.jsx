import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gp0egaclj.css';
import '../../css/g/gs8m_709r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="gp0egaclj"/><path class="gs8m_709r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:git-commit-horizontal"} {...others} />);
}

export default Component;
