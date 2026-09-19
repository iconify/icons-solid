import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ype9wcl-x.css';
import '../../css/p/pwrg7hbga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ype9wcl-x"/><path class="pwrg7hbga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-edit-02"} {...others} />);
}

export default Component;
