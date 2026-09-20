import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iku5nns_x.css';
import '../../css/i/ibhuv3bvf.css';
import '../../css/s/s1m0m1bfy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="iku5nns_x"/><path class="ibhuv3bvf"/><path class="s1m0m1bfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-record-player"} {...others} />);
}

export default Component;
