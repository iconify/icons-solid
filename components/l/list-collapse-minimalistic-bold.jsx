import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_kzq_bzg.css';
import '../../css/x/xgkgwx6vp.css';
import '../../css/a/ax17gbbek.css';
import '../../css/t/t5ovb-bau.css';
import '../../css/j/jctsgpbwy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h_kzq_bzg"/><path class="xgkgwx6vp"/><path class="ax17gbbek"/><path class="t5ovb-bau"/><path class="jctsgpbwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-collapse-minimalistic-bold"} {...others} />);
}

export default Component;
