import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umcq-5b7v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a_o4ambzo.css';
import '../../css/c/c_63bjjtw.css';
import '../../css/d/d6j4cobbq.css';
import '../../css/j/j6z-lbb7e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary umcq-5b7v"/><g class="dt0cm9dhy primary"><path class="a_o4ambzo"/><path class="c_63bjjtw"/><path class="d6j4cobbq"/><path class="j6z-lbb7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:tablets-duo"} {...others} />);
}

export default Component;
