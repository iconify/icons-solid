import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irx4tpg6l.css';
import '../../css/x/x7l00djaf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="irx4tpg6l"/><path class="x7l00djaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:edit-solid"} {...others} />);
}

export default Component;
