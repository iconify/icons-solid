import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxtsi0lcq.css';
import '../../css/m/mwxne9ydb.css';
import '../../css/n/nvelfbb4v.css';
import '../../css/q/qylfpj-0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="yxtsi0lcq"/><path class="mwxne9ydb"/><rect class="nvelfbb4v"/><path class="qylfpj-0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:subtitles-off"} {...others} />);
}

export default Component;
