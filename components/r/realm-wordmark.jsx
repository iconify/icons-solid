import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rriplvxzc.css';
import '../../css/q/q1xz-2b2c.css';
import '../../css/w/w5_anbccx.css';
import '../../css/z/zvg6fmywl.css';
import '../../css/j/jask1wu6r.css';
import '../../css/b/bh4-2o32t.css';
import '../../css/i/iohwpgbih.css';
import '../../css/b/b8perny4w.css';
import '../../css/t/t85yb_2hi.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="rriplvxzc"/><path class="q1xz-2b2c"/><path class="w5_anbccx"/><path class="zvg6fmywl"/><path class="jask1wu6r"/><path class="bh4-2o32t"/><path class="iohwpgbih"/><path class="b8perny4w"/><path class="t85yb_2hi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:realm-wordmark"} {...others} />);
}

export default Component;
