import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4uc9vb-s.css';
import '../../css/u/u7e-84bzp.css';

const viewBox = {"width":19,"height":24};
const content = `<path class="g4uc9vb-s"/><path class="u7e-84bzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:hot-air-balloon"} {...others} />);
}

export default Component;
