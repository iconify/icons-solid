import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m5e1rhb4m.css';
import '../../css/n/nl5dv7buo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m5e1rhb4m"/><path class="nl5dv7buo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-commit-vertical-fill"} {...others} />);
}

export default Component;
