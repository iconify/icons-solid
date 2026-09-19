import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enm7lobdg.css';
import '../../css/y/y2dyzwbxm.css';
import '../../css/j/jk6b_1b5n.css';
import '../../css/r/rpcu2eb_o.css';
import '../../css/g/gl4wu7gfm.css';
import '../../css/r/r4kl5ub6x.css';
import '../../css/y/yw9fk78yr.css';
import '../../css/c/cjan1r8hj.css';
import '../../css/j/j01tanbql.css';
import '../../css/m/m274zabew.css';
import '../../css/n/nqw9n8t6j.css';
import '../../css/m/md0lnzbhs.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="enm7lobdg"/><path class="y2dyzwbxm"/><path class="jk6b_1b5n"/><path class="rpcu2eb_o"/><path class="gl4wu7gfm"/><path class="r4kl5ub6x"/><path class="yw9fk78yr"/><path class="cjan1r8hj"/><path class="j01tanbql"/><path class="m274zabew"/><path class="nqw9n8t6j"/><path class="md0lnzbhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:princess"} {...others} />);
}

export default Component;
