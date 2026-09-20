import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/c/cqnf2cbfm.css';
import '../../css/v/v9pdw6bty.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="cqnf2cbfm"/><path class="v9pdw6bty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:feather-pen"} {...others} />);
}

export default Component;
