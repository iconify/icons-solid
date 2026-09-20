import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c42wbbbmv.css';
import '../../css/a/a9mdu8gjb.css';
import '../../css/u/upbnhsbyv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c42wbbbmv"/><path class="a9mdu8gjb"/><path clip-rule="evenodd" class="upbnhsbyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:stopwatch-light"} {...others} />);
}

export default Component;
