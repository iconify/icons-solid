import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bie8y9lpk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bie8y9lpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:information-slab-symbol"} {...others} />);
}

export default Component;
