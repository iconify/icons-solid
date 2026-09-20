import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtsnveitd.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vt533fbwo.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nteqkgdxx.css';
import '../../css/a/aisxi3qis.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGabXJgcxD" class="vtsnveitd"/></defs><g class="cuyn6tgcc"><path clip-rule="evenodd" class="vt533fbwo"/><use href="#SVGabXJgcxD" clip-rule="evenodd" class="d2kvgvbvc"/><path class="nteqkgdxx"/><use href="#SVGabXJgcxD" clip-rule="evenodd" class="d2kvgvbvc"/><path class="aisxi3qis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:lightning-duotone"} {...others} />);
}

export default Component;
