import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xa0z9ccux.css';
import '../../css/c/cdardccke.css';
import '../../css/t/tkbzu4bpe.css';
import '../../css/w/wujjhtesw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xa0z9ccux"/><path class="cdardccke"/><path class="tkbzu4bpe"/><path class="wujjhtesw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sim-card-20"} {...others} />);
}

export default Component;
