import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sajnihbkl.css';
import '../../css/i/i7cc-hrjp.css';
import '../../css/r/rwjvbub1x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sajnihbkl"/><path clip-rule="evenodd" class="i7cc-hrjp"/><path class="rwjvbub1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:paste-special-16"} {...others} />);
}

export default Component;
