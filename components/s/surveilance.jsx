import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twlvl9xqi.css';
import '../../css/i/iqcp5rbie.css';
import '../../css/h/hlhy12fgc.css';
import '../../css/l/l9fx_dbkp.css';
import '../../css/z/zsojsgorx.css';
import '../../css/b/bzc406bqa.css';
import '../../css/j/jc4dbbc8w.css';
import '../../css/a/ae849gbxa.css';
import '../../css/s/shldlk9wo.css';
import '../../css/o/o_z-_3xtj.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGL7Rz0dtd" class="twlvl9xqi"/></defs><path class="iqcp5rbie"/><path class="hlhy12fgc"/><path class="l9fx_dbkp"/><path class="zsojsgorx"/><path class="bzc406bqa"/><path class="jc4dbbc8w"/><use href="#SVGL7Rz0dtd" class="ae849gbxa"/><use href="#SVGL7Rz0dtd" class="ae849gbxa"/><path class="shldlk9wo"/><path class="o_z-_3xtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:surveilance"} {...others} />);
}

export default Component;
