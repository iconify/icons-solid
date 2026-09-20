import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mdxc4tbhw.css';
import '../../css/a/a12oiib0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mdxc4tbhw"/><path class="a12oiib0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:outbound"} {...others} />);
}

export default Component;
