import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ak_u2fnec.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ak_u2fnec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:moon-16"} {...others} />);
}

export default Component;
