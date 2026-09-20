import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y2i6hgb-g.css';
import '../../css/i/ibat86b6g.css';
import '../../css/c/cv6ljxbvj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="y2i6hgb-g"/><path class="ibat86b6g"/><circle class="cv6ljxbvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-pin-1-pin-push-thumbtack"} {...others} />);
}

export default Component;
