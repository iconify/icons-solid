import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltam8gb4r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ltam8gb4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:article-search"} {...others} />);
}

export default Component;
