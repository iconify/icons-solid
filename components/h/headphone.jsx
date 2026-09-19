import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-2mhpm3q.css';
import '../../css/y/y4kxt9bzp.css';
import '../../css/e/ee3tl6bpi.css';
import '../../css/v/vj928v7qf.css';
import '../../css/w/w-8p84bqn.css';
import '../../css/z/z5d3frbii.css';
import '../../css/q/q3477tbvd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o-2mhpm3q"/><path class="y4kxt9bzp"/><path class="ee3tl6bpi"/><path class="vj928v7qf"/><path class="w-8p84bqn"/><path class="z5d3frbii"/><path class="q3477tbvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:headphone"} {...others} />);
}

export default Component;
