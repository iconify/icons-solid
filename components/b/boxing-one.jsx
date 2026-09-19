import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr36qhbyi.css';
import '../../css/g/gd1m_wu4n.css';
import '../../css/n/nhbex8btt.css';
import '../../css/z/z-npoacvd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="tr36qhbyi"><path class="gd1m_wu4n"/><path class="nhbex8btt"/><path class="z-npoacvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:boxing-one"} {...others} />);
}

export default Component;
