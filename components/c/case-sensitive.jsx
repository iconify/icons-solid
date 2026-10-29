import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzwbc_bby.css';
import '../../css/o/o38w76bkv.css';
import '../../css/d/d186gb-9j.css';
import '../../css/y/ykbg75qcu.css';
import '../../css/s/swtu9zpvd.css';
import '../../css/j/jkodl5bbm.css';
import '../../css/q/qrxfzgbyv.css';
import '../../css/b/bjcjl56an.css';
import '../../css/j/jw0bmwfaa.css';
import '../../css/i/idrun8bud.css';
import '../../css/m/m9ywoob2z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uzwbc_bby wm-shadow"/><path class="o38w76bkv wm-k"/><path class="d186gb-9j wm-k"/><path class="wm-k ykbg75qcu"/><path class="swtu9zpvd wm-k"/><path class="jkodl5bbm wm-shine"/><path class="qrxfzgbyv wm-a"/><path class="bjcjl56an wm-a"/><path class="jw0bmwfaa wm-a"/><path class="idrun8bud wm-a"/><path class="m9ywoob2z wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:case-sensitive"} {...others} />);
}

export default Component;
