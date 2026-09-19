import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/n/nybc2db3k.css';
import '../../css/h/hatha3nri.css';
import '../../css/t/tw5ngbukx.css';
import '../../css/h/h5amn9btw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="nybc2db3k"/><path class="hatha3nri"/><path clip-rule="evenodd" class="tw5ngbukx"/><path class="h5amn9btw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:delete-one"} {...others} />);
}

export default Component;
