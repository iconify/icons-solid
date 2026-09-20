import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y1kbuqzpw.css';
import '../../css/q/q2sdytbvw.css';
import '../../css/u/u3qj96b3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><ellipse class="y1kbuqzpw"/><path class="q2sdytbvw"/><path class="u3qj96b3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:coins-stack"} {...others} />);
}

export default Component;
