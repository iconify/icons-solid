import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iubyquigk.css';
import '../../css/a/alzr3bc5d.css';
import '../../css/z/zvfnxjwub.css';
import '../../css/y/yzftjwb2g.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="iubyquigk"/><path class="alzr3bc5d"/><path class="zvfnxjwub"/><path class="yzftjwb2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:set-up"} {...others} />);
}

export default Component;
