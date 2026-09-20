import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cf_s62bdd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cf_s62bdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:currency-usd-circle-outline"} {...others} />);
}

export default Component;
