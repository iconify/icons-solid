import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz0uj0bdt.css';
import '../../css/b/bn449xbii.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pz0uj0bdt"/><path class="bn449xbii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:envelope-solid"} {...others} />);
}

export default Component;
