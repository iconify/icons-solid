import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/o/oy94ivrbs.css';
import '../../css/t/thxofh4mb.css';
import '../../css/h/hffxopbeb.css';
import '../../css/l/li3jly3hg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="oy94ivrbs"/><path class="thxofh4mb"/><circle class="hffxopbeb"/><path class="li3jly3hg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:file-search-two"} {...others} />);
}

export default Component;
