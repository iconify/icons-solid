import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mmt6z6bum.css';
import '../../css/c/cd2k4gb1a.css';
import '../../css/j/j69s81b8j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="mmt6z6bum"/><circle class="cd2k4gb1a"/><path class="j69s81b8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:skull"} {...others} />);
}

export default Component;
