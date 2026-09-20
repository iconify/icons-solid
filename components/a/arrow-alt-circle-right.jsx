import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvqusacuk.css';
import '../../css/b/bfknv0bxa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cvqusacuk"/><path class="bfknv0bxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:arrow-alt-circle-right"} {...others} />);
}

export default Component;
