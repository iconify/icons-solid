import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj334wbso.css';

const viewBox = {"width":25.548,"height":29.501,"left":3.227,"top":1.25};
const content = `<path class="oj334wbso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:epic-games-dark"} {...others} />);
}

export default Component;
