import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kq6n_s_po.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="kq6n_s_po"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:eye-slash"} {...others} />);
}

export default Component;
