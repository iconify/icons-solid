import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_71-fb8o.css';
import '../../css/g/gg06_sb0j.css';
import '../../css/u/ut5psuaky.css';
import '../../css/p/pz2zo8bph.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a_71-fb8o"/><path class="gg06_sb0j"/><path class="ut5psuaky"/><path class="pz2zo8bph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:coin-stack"} {...others} />);
}

export default Component;
