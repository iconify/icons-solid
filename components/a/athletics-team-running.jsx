import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwpkj-b8l.css';
import '../../css/k/kuydkjbao.css';
import '../../css/a/adwtuvifj.css';
import '../../css/t/tuwfl-zat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iwpkj-b8l"/><path class="kuydkjbao"/><path class="adwtuvifj"/><path class="tuwfl-zat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:athletics-team-running"} {...others} />);
}

export default Component;
