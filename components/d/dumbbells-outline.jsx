import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sai67h5sk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sai67h5sk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbells-outline"} {...others} />);
}

export default Component;
