import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m64_6gi5u.css';
import '../../css/h/hpml1nxgd.css';
import '../../css/z/zvvso5rkk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m64_6gi5u"/><rect class="hpml1nxgd"/><rect class="zvvso5rkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:horizontal-distribute-left-filled"} {...others} />);
}

export default Component;
