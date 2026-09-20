import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/yetfgtbvu.css';
import '../../css/v/v7yougpow.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="yetfgtbvu"/><path class="v7yougpow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:wrap-arch"} {...others} />);
}

export default Component;
