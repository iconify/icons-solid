import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8nwnmb-m.css';
import '../../css/p/p9k80_4qe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-primary-layer l8nwnmb-m"/><path class="duoicon-secondary-layer p9k80_4qe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:cake"} {...others} />);
}

export default Component;
