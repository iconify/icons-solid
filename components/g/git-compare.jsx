import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fr1fxrgrl.css';
import '../../css/h/h6pp3dbux.css';
import '../../css/b/b40oykbsb.css';
import '../../css/o/o38pash6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fr1fxrgrl wm-shadow"/><path class="h6pp3dbux"/><path class="b40oykbsb"/><path class="o38pash6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:git-compare"} {...others} />);
}

export default Component;
