import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gko5h7otm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gko5h7otm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:affinity-publiser-logo"} {...others} />);
}

export default Component;
