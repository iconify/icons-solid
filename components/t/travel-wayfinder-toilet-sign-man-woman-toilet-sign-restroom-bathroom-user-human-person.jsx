import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y2uef-b8t.css';
import '../../css/c/ci-4_8bhe.css';
import '../../css/v/vxx69tbmh.css';
import '../../css/i/iuasgch0e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="y2uef-b8t"/><path class="ci-4_8bhe"/><circle class="vxx69tbmh"/><path class="iuasgch0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-wayfinder-toilet-sign-man-woman-toilet-sign-restroom-bathroom-user-human-person"} {...others} />);
}

export default Component;
