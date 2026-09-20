import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v4p3dtbsn.css';
import '../../css/p/p6-ah-buj.css';
import '../../css/y/y6ut97bug.css';
import '../../css/b/b9z38gbkf.css';
import '../../css/u/uehed0bti.css';
import '../../css/y/ynzufjk9e.css';
import '../../css/c/c9u5ag89y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v4p3dtbsn"/><path class="p6-ah-buj"/><path class="y6ut97bug"/><path class="b9z38gbkf"/><path class="uehed0bti"/><path class="ynzufjk9e"/><path class="c9u5ag89y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:modern-tv-remote"} {...others} />);
}

export default Component;
