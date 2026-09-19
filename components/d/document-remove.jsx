import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8krlm47t.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="k8krlm47t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:document-remove"} {...others} />);
}

export default Component;
