import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pu8nhg2df.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pu8nhg2df"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:thunderbolt-fill"} {...others} />);
}

export default Component;
