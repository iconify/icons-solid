import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ismf5ilwe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ismf5ilwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:current-dc"} {...others} />);
}

export default Component;
