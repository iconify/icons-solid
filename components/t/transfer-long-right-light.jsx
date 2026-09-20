import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6n_93bla.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t6n_93bla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:transfer-long-right-light"} {...others} />);
}

export default Component;
