import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/auke2fbew.css';
import '../../css/m/milkvvbfj.css';
import '../../css/u/uq37wbbrx.css';
import '../../css/t/t-cqpe51j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="auke2fbew"/><circle class="milkvvbfj"/><circle class="uq37wbbrx"/><path class="t-cqpe51j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-typewriter-typewriter-company-office-supplies-work"} {...others} />);
}

export default Component;
