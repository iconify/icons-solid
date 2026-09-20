import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0uy8mbpw.css';
import '../../css/j/jzb80x-ee.css';
import '../../css/v/v8azslive.css';
import '../../css/v/vmm84f6gj.css';
import '../../css/y/yvdwmpb6i.css';
import '../../css/x/xyjse7bub.css';
import '../../css/x/xktbhobxo.css';
import '../../css/u/uvabb02gy.css';
import '../../css/l/lru-tpcqa.css';
import '../../css/y/ylmaqgbdd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z0uy8mbpw"/><path class="jzb80x-ee"/><path class="v8azslive"/><path class="vmm84f6gj"/><path class="yvdwmpb6i"/><circle class="xyjse7bub"/><path class="xktbhobxo"/><path class="uvabb02gy"/><path class="lru-tpcqa"/><path class="ylmaqgbdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:donetick"} {...others} />);
}

export default Component;
