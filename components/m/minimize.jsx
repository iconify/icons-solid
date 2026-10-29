import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-tys13rn.css';
import '../../css/n/ne7bzbcsu.css';
import '../../css/u/ui6r1kbdd.css';
import '../../css/w/wkvfpv47j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j-tys13rn wm-k"/><path class="ne7bzbcsu wm-a"/><path class="ui6r1kbdd wm-k"/><path class="wkvfpv47j wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:minimize"} {...others} />);
}

export default Component;
