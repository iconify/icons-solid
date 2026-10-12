import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-i7xbe_m.css';
import '../../css/g/g7fuoqbeu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n-i7xbe_m"/><path clip-rule="evenodd" class="g7fuoqbeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:playing-cards-filled"} {...others} />);
}

export default Component;
