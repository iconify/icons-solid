import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/metmuqbrp.css';
import '../../css/a/aeo--wbrz.css';
import '../../css/m/mr0d03bjj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="metmuqbrp"/><path class="aeo--wbrz"/><path class="mr0d03bjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:currency-exchange-48-bold"} {...others} />);
}

export default Component;
