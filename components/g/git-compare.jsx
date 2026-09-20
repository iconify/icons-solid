import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ez1x61b2a.css';
import '../../css/z/zcrcylsxu.css';
import '../../css/z/zdnjoff1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="ez1x61b2a"/><circle class="zcrcylsxu"/><path class="zdnjoff1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:git-compare"} {...others} />);
}

export default Component;
