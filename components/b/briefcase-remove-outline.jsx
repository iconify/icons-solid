import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cz_l2cbiw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cz_l2cbiw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:briefcase-remove-outline"} {...others} />);
}

export default Component;
