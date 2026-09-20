import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fr0ysc8zx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fr0ysc8zx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:shield-remove-outline"} {...others} />);
}

export default Component;
