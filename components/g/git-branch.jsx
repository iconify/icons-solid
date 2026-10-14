import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/u/u59vj0byr.css';
import '../../css/l/lvkoenb9q.css';
import '../../css/z/z59nhccfv.css';
import '../../css/i/ipsrlibww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="u59vj0byr"/><path class="lvkoenb9q"/><path class="z59nhccfv"/><path class="ipsrlibww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:git-branch"} {...others} />);
}

export default Component;
