import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqt3kzc5w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bqt3kzc5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:list-unordered"} {...others} />);
}

export default Component;
