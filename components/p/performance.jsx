import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/eocg56z0b.css';
import '../../css/p/pwae5gbzg.css';
import '../../css/g/goapajb2k.css';
import '../../css/w/wv-togb4q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="eocg56z0b"/><path class="pwae5gbzg"/><path class="goapajb2k"/><path class="wv-togb4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:performance"} {...others} />);
}

export default Component;
