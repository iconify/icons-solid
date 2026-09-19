import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttd3jyrng.css';
import '../../css/v/v7rhl_77b.css';
import '../../css/b/burecob8o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ttd3jyrng"/><path class="v7rhl_77b"/><path class="burecob8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:certificate-check"} {...others} />);
}

export default Component;
