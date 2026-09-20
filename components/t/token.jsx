import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g73ufzeyq.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="g73ufzeyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:token"} {...others} />);
}

export default Component;
