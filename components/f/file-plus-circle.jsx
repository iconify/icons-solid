import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adm_kkbuq.css';
import '../../css/h/hffq3ijlx.css';
import '../../css/t/tjw051bld.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="adm_kkbuq"/><path class="hffq3ijlx"/><path clip-rule="evenodd" class="tjw051bld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:file-plus-circle"} {...others} />);
}

export default Component;
