import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/v/vxysmzw3k.css';
import '../../css/y/yfs_czbgj.css';
import '../../css/i/iaf4m8_yn.css';
import '../../css/u/uulr82dkw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path clip-rule="evenodd" class="vxysmzw3k"/><path class="yfs_czbgj"/><path class="iaf4m8_yn"/><path class="uulr82dkw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:delete-themes"} {...others} />);
}

export default Component;
