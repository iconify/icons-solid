import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udkn3mb-y.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="udkn3mb-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:pencil"} {...others} />);
}

export default Component;
