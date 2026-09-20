import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec7mc1bpe.css';
import '../../css/g/g6kyzbcgj.css';
import '../../css/k/kymmh3mru.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ec7mc1bpe"/><path class="g6kyzbcgj"/><path class="kymmh3mru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:truck"} {...others} />);
}

export default Component;
