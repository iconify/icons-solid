import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy7ho_3pd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jy7ho_3pd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:child-toy"} {...others} />);
}

export default Component;
