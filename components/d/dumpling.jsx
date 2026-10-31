import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpe4y4bdd.css';
import '../../css/a/a0m2q3bsg.css';
import '../../css/f/fqhq6fbgo.css';
import '../../css/e/edfqzq-tl.css';
import '../../css/s/ss0x5acba.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g display="block"><path class="mpe4y4bdd"/><path class="a0m2q3bsg"/><path class="fqhq6fbgo"/><path class="edfqzq-tl"/><path class="ss0x5acba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:dumpling"} {...others} />);
}

export default Component;
