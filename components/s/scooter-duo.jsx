import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sel8xy8tf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z7iui6bfm.css';
import '../../css/x/xtimiwb4t.css';
import '../../css/w/wns8g6r_f.css';
import '../../css/e/e4rxnntim.css';
import '../../css/h/hjq9e47ox.css';
import '../../css/z/z1vrtjzgu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary sel8xy8tf"/><g class="dt0cm9dhy primary"><path class="z7iui6bfm"/><path class="xtimiwb4t"/><path class="wns8g6r_f"/><path class="e4rxnntim"/><path class="hjq9e47ox"/><path class="z1vrtjzgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:scooter-duo"} {...others} />);
}

export default Component;
