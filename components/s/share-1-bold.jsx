import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ru5b1fbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ru5b1fbvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:share-1-bold"} {...others} />);
}

export default Component;
