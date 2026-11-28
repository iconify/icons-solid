import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yazgverul.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o-59dh1-x.css';
import '../../css/t/t-juw-ftj.css';
import '../../css/h/h5ats917a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary yazgverul"/><g class="dt0cm9dhy primary"><path class="o-59dh1-x"/><path class="t-juw-ftj"/><path class="h5ats917a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:beer-bottle-duo"} {...others} />);
}

export default Component;
