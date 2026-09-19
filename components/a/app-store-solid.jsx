import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/accb4rb7d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="accb4rb7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:app-store-solid"} {...others} />);
}

export default Component;
