import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f93zup36c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dahxw4bbt.css';
import '../../css/k/k1whppbep.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f93zup36c secondary"/><g class="dt0cm9dhy primary"><path class="dahxw4bbt"/><path class="k1whppbep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mastodon-duo"} {...others} />);
}

export default Component;
