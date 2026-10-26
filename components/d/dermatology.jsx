import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk4-6obph.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="lk4-6obph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:dermatology"} {...others} />);
}

export default Component;
