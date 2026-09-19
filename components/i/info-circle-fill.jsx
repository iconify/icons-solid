import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sctsf2b8b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sctsf2b8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:info-circle-fill"} {...others} />);
}

export default Component;
