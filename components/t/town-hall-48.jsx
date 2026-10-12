import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prf_67usu.css';
import '../../css/k/k1wv7cb9q.css';
import '../../css/v/vtmw5etbw.css';
import '../../css/k/krjae8bbw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="prf_67usu"/><path class="k1wv7cb9q"/><path class="vtmw5etbw"/><path class="krjae8bbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:town-hall-48"} {...others} />);
}

export default Component;
