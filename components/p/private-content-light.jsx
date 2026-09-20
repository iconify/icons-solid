import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2v4it5to.css';
import '../../css/v/velavw33g.css';
import '../../css/k/krzgvzbvy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u2v4it5to"/><path class="velavw33g"/><path class="krzgvzbvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:private-content-light"} {...others} />);
}

export default Component;
