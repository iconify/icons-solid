import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m_ft6pn-j.css';
import '../../css/b/btbcc9mqd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m_ft6pn-j"/><path class="btbcc9mqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-commit-horizontal-two-tone"} {...others} />);
}

export default Component;
