import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/v/v-mv1g.css';
import '../../css/y/ydovum.css';
import '../../css/o/omd_kv.css';
import '../../css/c/c27iog.css';
import '../../css/s/so-from-22.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew v-mv1g ydovum"/><path class="iw1iew omd_kv ydovum"/><path class="c27iog iw1iew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:person-remove-filled"} {...others} />);
}

export default Component;
