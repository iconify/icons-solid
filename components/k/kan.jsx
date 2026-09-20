import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzzv-dbod.css';
import '../../css/v/v19mbwu8m.css';
import '../../css/p/pbaa7xb3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bzzv-dbod"/><path class="v19mbwu8m"/><path class="pbaa7xb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:kan"} {...others} />);
}

export default Component;
