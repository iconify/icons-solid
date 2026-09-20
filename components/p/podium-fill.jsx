import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r2fk4xb9m.css';
import '../../css/u/umnetetzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r2fk4xb9m"/><path class="umnetetzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:podium-fill"} {...others} />);
}

export default Component;
