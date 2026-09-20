import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xs81tw52f.css';
import '../../css/w/wnx0jwbvt.css';
import '../../css/k/k-eldqbfz.css';
import '../../css/t/tgvbmnbgb.css';
import '../../css/e/enfa23jcl.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};
const content = `<g clip-rule="evenodd"><path class="xs81tw52f"/><path class="wnx0jwbvt"/></g><path class="k-eldqbfz"/><path class="tgvbmnbgb"/><path class="enfa23jcl"/><path class="e4zfowz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:up-exclamation-button"} {...others} />);
}

export default Component;
