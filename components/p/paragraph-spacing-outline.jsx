import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwza1nenl.css';
import '../../css/c/cenzczbpq.css';
import '../../css/q/q6lfj_b-f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iwza1nenl"/><path class="cenzczbpq"/><path class="q6lfj_b-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paragraph-spacing-outline"} {...others} />);
}

export default Component;
