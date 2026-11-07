import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw1zzn-6t.css';
import '../../css/r/ra2ravfoj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qw1zzn-6t"/><path class="ra2ravfoj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbells-2-bold"} {...others} />);
}

export default Component;
