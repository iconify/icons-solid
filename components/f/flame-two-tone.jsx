import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a8nzzvbqe.css';
import '../../css/p/pr9pkgbgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a8nzzvbqe"/><path class="pr9pkgbgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:flame-two-tone"} {...others} />);
}

export default Component;
