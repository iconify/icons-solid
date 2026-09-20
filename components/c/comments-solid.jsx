import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kw-d8obrx.css';
import '../../css/z/zh8kziv_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kw-d8obrx"/><path class="zh8kziv_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:comments-solid"} {...others} />);
}

export default Component;
