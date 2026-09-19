import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5q30_6zq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="i5q30_6zq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:adobe-lightroom-solid"} {...others} />);
}

export default Component;
