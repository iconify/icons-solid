import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abn7u8b5a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="abn7u8b5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-line-decreasing-sharp"} {...others} />);
}

export default Component;
