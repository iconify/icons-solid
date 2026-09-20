import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/i/invu3qyef.css';
import '../../css/s/sbnun1btu.css';
import '../../css/u/uz0gal0pg.css';
import '../../css/f/f_y8jwxlf.css';
import '../../css/q/qygwoi79u.css';
import '../../css/w/wu_-zlbbk.css';
import '../../css/h/h8ldgtbkh.css';
import '../../css/m/m4fb07kla.css';
import '../../css/d/dt6y-gbrm.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><path class="invu3qyef"/><path class="sbnun1btu"/><path class="uz0gal0pg"/><path class="f_y8jwxlf"/><circle class="qygwoi79u"/><path class="wu_-zlbbk"/><path class="h8ldgtbkh"/><path class="m4fb07kla"/><path class="dt6y-gbrm"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-afghanistan"} {...others} />);
}

export default Component;
