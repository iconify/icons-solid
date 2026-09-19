import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/ytftarm9g.css';
import '../../css/s/sslehqmfk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="ytftarm9g"/><path class="sslehqmfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:lrc"} {...others} />);
}

export default Component;
