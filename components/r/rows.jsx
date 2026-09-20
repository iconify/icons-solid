import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uiarw7b8j.css';
import '../../css/b/b0exrkbyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="uiarw7b8j"/><path class="b0exrkbyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:rows"} {...others} />);
}

export default Component;
