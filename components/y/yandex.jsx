import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk-idjbly.css';

const viewBox = {"width":580.641,"height":1000};
const content = `<path class="lk-idjbly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:yandex"} {...others} />);
}

export default Component;
