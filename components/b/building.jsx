import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tfazt4b9n.css';
import '../../css/t/tuuqhnbvj.css';
import '../../css/t/tgej6jbmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tfazt4b9n"/><path class="tuuqhnbvj"/><path class="tgej6jbmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:building"} {...others} />);
}

export default Component;
