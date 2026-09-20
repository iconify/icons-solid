import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c19oaoeat.css';
import '../../css/r/r06lfct9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c19oaoeat"/><path class="r06lfct9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:graduation-cap-fill"} {...others} />);
}

export default Component;
