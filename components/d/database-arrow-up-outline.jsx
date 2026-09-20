import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3yy7pbrl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u3yy7pbrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:database-arrow-up-outline"} {...others} />);
}

export default Component;
